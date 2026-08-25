const Service = require('../models/Service');
const asyncHandler = require('../utils/asyncHandler');
const makeSlug = require('../utils/slugify');
const { streamUpload, deleteImage } = require('../services/cloudinaryService');

const getServices = asyncHandler(async (req, res) => {
  const filter = req.admin ? {} : { active: true };
  const services = await Service.find(filter).sort({ order: 1, createdAt: 1 });
  res.json(services);
});

const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error('Service not found');
  }
  res.json(service);
});

const createService = asyncHandler(async (req, res) => {
  const { title, description, order, active } = req.body;
  if (!title || !description) {
    res.status(400);
    throw new Error('Title and description are required');
  }
  let image;
  if (req.file) {
    const result = await streamUpload(req.file.buffer, 'iten-tv/services');
    image = { publicId: result.public_id, url: result.secure_url };
  }
  const service = await Service.create({
    title,
    slug: makeSlug(title),
    description,
    image,
    order: order || 0,
    active: active === undefined ? true : active === 'true' || active === true,
  });
  res.status(201).json(service);
});

const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error('Service not found');
  }
  const { title, description, order, active } = req.body;
  if (title) {
    service.title = title;
    service.slug = makeSlug(title);
  }
  if (description !== undefined) service.description = description;
  if (order !== undefined) service.order = order;
  if (active !== undefined) service.active = active === 'true' || active === true;
  if (req.file) {
    if (service.image?.publicId) await deleteImage(service.image.publicId);
    const result = await streamUpload(req.file.buffer, 'iten-tv/services');
    service.image = { publicId: result.public_id, url: result.secure_url };
  }
  await service.save();
  res.json(service);
});

const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error('Service not found');
  }
  if (service.image?.publicId) await deleteImage(service.image.publicId);
  await service.deleteOne();
  res.json({ message: 'Service deleted' });
});

module.exports = { getServices, getServiceById, createService, updateService, deleteService };
