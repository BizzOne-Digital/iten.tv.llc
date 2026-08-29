const mongoose = require('mongoose');

const galleryItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, default: 'General', trim: true },
    link: { type: String, trim: true },
    image: {
      publicId: String,
      url: { type: String, required: true },
    },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('GalleryItem', galleryItemSchema);
