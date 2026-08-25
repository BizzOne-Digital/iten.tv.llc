const BlogPost = require('../models/BlogPost');
const asyncHandler = require('../utils/asyncHandler');
const makeSlug = require('../utils/slugify');
const { streamUpload, deleteImage } = require('../services/cloudinaryService');

// GET /api/blog  (public: only published, supports ?category=&search=&page=&limit=)
const getPosts = asyncHandler(async (req, res) => {
  const { category, search, page = 1, limit = 9, all } = req.query;
  const filter = {};
  if (!req.admin && all !== 'true') filter.published = true;
  if (category) filter.category = category;
  if (search) filter.$text = { $search: search };

  const pageNum = Math.max(parseInt(page, 10) || 1, 1);
  const limitNum = Math.max(parseInt(limit, 10) || 9, 1);

  const [posts, total] = await Promise.all([
    BlogPost.find(filter)
      .populate('category', 'name slug')
      .sort({ createdAt: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum),
    BlogPost.countDocuments(filter),
  ]);

  res.json({
    posts,
    total,
    page: pageNum,
    pages: Math.ceil(total / limitNum) || 1,
  });
});

// GET /api/blog/:slug
const getPostBySlug = asyncHandler(async (req, res) => {
  const post = await BlogPost.findOne({ slug: req.params.slug }).populate('category', 'name slug');
  if (!post) {
    res.status(404);
    throw new Error('Blog post not found');
  }
  post.views = (post.views || 0) + 1;
  await post.save();

  const related = await BlogPost.find({
    _id: { $ne: post._id },
    category: post.category,
    published: true,
  })
    .limit(3)
    .select('title slug excerpt featuredImage createdAt');

  res.json({ post, related });
});

// GET /api/blog/admin/:id
const getPostById = asyncHandler(async (req, res) => {
  const post = await BlogPost.findById(req.params.id).populate('category', 'name slug');
  if (!post) {
    res.status(404);
    throw new Error('Blog post not found');
  }
  res.json(post);
});

const createPost = asyncHandler(async (req, res) => {
  const { title, category, excerpt, content, seoTitle, seoDescription, author, published } = req.body;
  if (!title || !content) {
    res.status(400);
    throw new Error('Title and content are required');
  }

  let featuredImage;
  if (req.file) {
    const result = await streamUpload(req.file.buffer, 'iten-tv/blog');
    featuredImage = { publicId: result.public_id, url: result.secure_url };
  }

  const post = await BlogPost.create({
    title,
    slug: makeSlug(title),
    category: category || undefined,
    excerpt,
    content,
    featuredImage,
    seoTitle,
    seoDescription,
    author,
    published: published === 'true' || published === true,
  });
  res.status(201).json(post);
});

const updatePost = asyncHandler(async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Blog post not found');
  }
  const { title, category, excerpt, content, seoTitle, seoDescription, author, published } = req.body;

  if (title) {
    post.title = title;
    post.slug = makeSlug(title);
  }
  if (category !== undefined) post.category = category || undefined;
  if (excerpt !== undefined) post.excerpt = excerpt;
  if (content !== undefined) post.content = content;
  if (seoTitle !== undefined) post.seoTitle = seoTitle;
  if (seoDescription !== undefined) post.seoDescription = seoDescription;
  if (author !== undefined) post.author = author;
  if (published !== undefined) post.published = published === 'true' || published === true;

  if (req.file) {
    if (post.featuredImage?.publicId) await deleteImage(post.featuredImage.publicId);
    const result = await streamUpload(req.file.buffer, 'iten-tv/blog');
    post.featuredImage = { publicId: result.public_id, url: result.secure_url };
  }

  await post.save();
  res.json(post);
});

const deletePost = asyncHandler(async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Blog post not found');
  }
  if (post.featuredImage?.publicId) await deleteImage(post.featuredImage.publicId);
  await post.deleteOne();
  res.json({ message: 'Blog post deleted' });
});

module.exports = { getPosts, getPostBySlug, getPostById, createPost, updatePost, deletePost };
