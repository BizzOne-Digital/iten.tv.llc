const GalleryItem = require('../models/GalleryItem');
const asyncHandler = require('../utils/asyncHandler');
const { streamUpload, deleteImage } = require('../services/cloudinaryService');

const getGalleryItems = asyncHandler(async (req, res) => {
  const filter = req.admin ? {} : { active: true };
  const items = await GalleryItem.find(filter).sort({ order: 1, createdAt: -1 });
  res.json(items);
});

const getGalleryItemById = asyncHandler(async (req, res) => {
  const item = await GalleryItem.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Gallery item not found');
  }
  res.json(item);
});

const createGalleryItem = asyncHandler(async (req, res) => {
  const { title, category, order, active } = req.body;
  if (!title) {
    res.status(400);
    throw new Error('Title is required');
  }
  if (!req.file) {
    res.status(400);
    throw new Error('Image is required');
  }
  const result = await streamUpload(req.file.buffer, 'iten-tv/gallery');
  const item = await GalleryItem.create({
    title,
    category: category || 'General',
    image: { publicId: result.public_id, url: result.secure_url },
    order: order || 0,
    active: active === undefined ? true : active === 'true' || active === true,
  });
  res.status(201).json(item);
});

const updateGalleryItem = asyncHandler(async (req, res) => {
  const item = await GalleryItem.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Gallery item not found');
  }
  const { title, category, order, active } = req.body;
  if (title !== undefined) item.title = title;
  if (category !== undefined) item.category = category;
  if (order !== undefined) item.order = order;
  if (active !== undefined) item.active = active === 'true' || active === true;
  if (req.file) {
    if (item.image?.publicId) await deleteImage(item.image.publicId);
    const result = await streamUpload(req.file.buffer, 'iten-tv/gallery');
    item.image = { publicId: result.public_id, url: result.secure_url };
  }
  await item.save();
  res.json(item);
});

const deleteGalleryItem = asyncHandler(async (req, res) => {
  const item = await GalleryItem.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Gallery item not found');
  }
  if (item.image?.publicId) await deleteImage(item.image.publicId);
  await item.deleteOne();
  res.json({ message: 'Gallery item deleted' });
});

module.exports = {
  getGalleryItems,
  getGalleryItemById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
};
