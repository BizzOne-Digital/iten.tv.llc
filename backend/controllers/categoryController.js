const Category = require('../models/Category');
const asyncHandler = require('../utils/asyncHandler');
const makeSlug = require('../utils/slugify');

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  res.json(categories);
});

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400);
    throw new Error('Name is required');
  }
  const category = await Category.create({ name, slug: makeSlug(name) });
  res.status(201).json(category);
});

const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }
  if (name) {
    category.name = name;
    category.slug = makeSlug(name);
  }
  await category.save();
  res.json(category);
});

const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }
  await category.deleteOne();
  res.json({ message: 'Category deleted' });
});

module.exports = { getCategories, createCategory, updateCategory, deleteCategory };
