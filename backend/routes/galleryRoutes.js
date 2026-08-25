const express = require('express');
const {
  getGalleryItems,
  getGalleryItemById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} = require('../controllers/galleryController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', getGalleryItems);
router.get('/:id', getGalleryItemById);
router.post('/', protect, upload.single('image'), createGalleryItem);
router.put('/:id', protect, upload.single('image'), updateGalleryItem);
router.delete('/:id', protect, deleteGalleryItem);

module.exports = router;
