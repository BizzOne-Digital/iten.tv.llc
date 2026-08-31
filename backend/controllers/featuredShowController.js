const FeaturedShow = require('../models/FeaturedShow');
const asyncHandler = require('../utils/asyncHandler');
const { streamUpload, deleteImage } = require('../services/cloudinaryService');

const getFeaturedShows = asyncHandler(async (req, res) => {
  const filter = req.admin ? {} : { active: true };
  const items = await FeaturedShow.find(filter).sort({ order: 1, createdAt: 1 });
  res.json(items);
});

const getFeaturedShowById = asyncHandler(async (req, res) => {
  const item = await FeaturedShow.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Featured show not found');
  }
  res.json(item);
});

const createFeaturedShow = asyncHandler(async (req, res) => {
  const { title, genre, order, active } = req.body;
  if (!title) {
    res.status(400);
    throw new Error('Title is required');
  }
  if (!req.file) {
    res.status(400);
    throw new Error('Image is required');
  }
  const result = await streamUpload(req.file.buffer, 'iten-tv/featured-shows');
  const item = await FeaturedShow.create({
    title,
    genre: genre || 'Racing',
    image: { publicId: result.public_id, url: result.secure_url },
    order: order || 0,
    active: active === undefined ? true : active === 'true' || active === true,
  });
  res.status(201).json(item);
});

const updateFeaturedShow = asyncHandler(async (req, res) => {
  const item = await FeaturedShow.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Featured show not found');
  }
  const { title, genre, order, active } = req.body;
  if (title !== undefined) item.title = title;
  if (genre !== undefined) item.genre = genre;
  if (order !== undefined) item.order = order;
  if (active !== undefined) item.active = active === 'true' || active === true;
  if (req.file) {
    if (item.image?.publicId) await deleteImage(item.image.publicId);
    const result = await streamUpload(req.file.buffer, 'iten-tv/featured-shows');
    item.image = { publicId: result.public_id, url: result.secure_url };
  }
  await item.save();
  res.json(item);
});

const deleteFeaturedShow = asyncHandler(async (req, res) => {
  const item = await FeaturedShow.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Featured show not found');
  }
  if (item.image?.publicId) await deleteImage(item.image.publicId);
  await item.deleteOne();
  res.json({ message: 'Featured show deleted' });
});

module.exports = {
  getFeaturedShows,
  getFeaturedShowById,
  createFeaturedShow,
  updateFeaturedShow,
  deleteFeaturedShow,
};
