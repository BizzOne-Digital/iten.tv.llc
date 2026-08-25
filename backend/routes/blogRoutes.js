const express = require('express');
const {
  getPosts,
  getPostBySlug,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/blogController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', getPosts);
router.get('/admin/:id', protect, getPostById);
router.post('/', protect, upload.single('featuredImage'), createPost);
router.put('/:id', protect, upload.single('featuredImage'), updatePost);
router.delete('/:id', protect, deletePost);
router.get('/:slug', getPostBySlug);

module.exports = router;
