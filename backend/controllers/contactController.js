const ContactSubmission = require('../models/ContactSubmission');
const asyncHandler = require('../utils/asyncHandler');
const { streamUpload, deleteImage } = require('../services/cloudinaryService');
const { sendContactNotification, sendContactConfirmation } = require('../services/emailService');

// POST /api/contact (public, multipart/form-data with optional "image")
const createSubmission = asyncHandler(async (req, res) => {
  const { name, email, phone, projectType, message } = req.body;
  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Name, email, and message are required');
  }

  let imageUrl, imagePublicId;
  if (req.file) {
    const result = await streamUpload(req.file.buffer, 'iten-tv/contact');
    imageUrl = result.secure_url;
    imagePublicId = result.public_id;
  }

  const submission = await ContactSubmission.create({
    name,
    email,
    phone,
    projectType,
    message,
    imageUrl,
    imagePublicId,
  });

  try {
    await sendContactNotification(submission);
    await sendContactConfirmation(submission);
  } catch (err) {
    console.error('Email send failed:', err.message);
  }

  res.status(201).json({ message: 'Thank you — your message has been received.', submission });
});

// GET /api/contact (admin)
const getSubmissions = asyncHandler(async (req, res) => {
  const { status } = req.query;
  const filter = {};
  if (status) filter.status = status;
  const submissions = await ContactSubmission.find(filter).sort({ createdAt: -1 });
  res.json(submissions);
});

const getSubmissionById = asyncHandler(async (req, res) => {
  const submission = await ContactSubmission.findById(req.params.id);
  if (!submission) {
    res.status(404);
    throw new Error('Submission not found');
  }
  res.json(submission);
});

const updateSubmissionStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const submission = await ContactSubmission.findById(req.params.id);
  if (!submission) {
    res.status(404);
    throw new Error('Submission not found');
  }
  if (status) submission.status = status;
  await submission.save();
  res.json(submission);
});

const deleteSubmission = asyncHandler(async (req, res) => {
  const submission = await ContactSubmission.findById(req.params.id);
  if (!submission) {
    res.status(404);
    throw new Error('Submission not found');
  }
  if (submission.imagePublicId) await deleteImage(submission.imagePublicId);
  await submission.deleteOne();
  res.json({ message: 'Submission deleted' });
});

module.exports = {
  createSubmission,
  getSubmissions,
  getSubmissionById,
  updateSubmissionStatus,
  deleteSubmission,
};
