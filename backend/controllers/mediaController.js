const Media = require('../models/Media');
const asyncHandler = require('../utils/asyncHandler');
const { streamUpload, deleteImage } = require('../services/cloudinaryService');

const getMedia = asyncHandler(async (req, res) => {
  const media = await Media.find().sort({ createdAt: -1 });
  res.json(media);
});

const uploadMedia = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('No file uploaded');
  }
  const result = await streamUpload(req.file.buffer, 'iten-tv/media');
  const media = await Media.create({
    publicId: result.public_id,
    secureUrl: result.secure_url,
    filename: req.file.originalname,
    format: result.format,
    resourceType: result.resource_type,
    bytes: result.bytes,
    uploadedBy: req.admin?._id,
  });
  res.status(201).json(media);
});

const deleteMedia = asyncHandler(async (req, res) => {
  const media = await Media.findById(req.params.id);
  if (!media) {
    res.status(404);
    throw new Error('Media not found');
  }
  await deleteImage(media.publicId);
  await media.deleteOne();
  res.json({ message: 'Media deleted' });
});

module.exports = { getMedia, uploadMedia, deleteMedia };
