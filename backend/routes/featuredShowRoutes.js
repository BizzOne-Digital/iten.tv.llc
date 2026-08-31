const express = require('express');
const {
  getFeaturedShows,
  getFeaturedShowById,
  createFeaturedShow,
  updateFeaturedShow,
  deleteFeaturedShow,
} = require('../controllers/featuredShowController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', getFeaturedShows);
router.get('/:id', getFeaturedShowById);
router.post('/', protect, upload.single('image'), createFeaturedShow);
router.put('/:id', protect, upload.single('image'), updateFeaturedShow);
router.delete('/:id', protect, deleteFeaturedShow);

module.exports = router;
