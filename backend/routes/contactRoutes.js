const express = require('express');
const {
  createSubmission,
  getSubmissions,
  getSubmissionById,
  updateSubmissionStatus,
  deleteSubmission,
} = require('../controllers/contactController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/', upload.single('image'), createSubmission);
router.get('/', protect, getSubmissions);
router.get('/:id', protect, getSubmissionById);
router.put('/:id', protect, updateSubmissionStatus);
router.delete('/:id', protect, deleteSubmission);

module.exports = router;
