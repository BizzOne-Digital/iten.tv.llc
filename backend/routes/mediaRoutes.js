const express = require('express');
const { getMedia, uploadMedia, deleteMedia } = require('../controllers/mediaController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', protect, getMedia);
router.post('/', protect, upload.single('file'), uploadMedia);
router.delete('/:id', protect, deleteMedia);

module.exports = router;
