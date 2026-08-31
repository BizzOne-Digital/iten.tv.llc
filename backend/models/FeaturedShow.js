const mongoose = require('mongoose');

const featuredShowSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    genre: { type: String, default: 'Racing', trim: true },
    image: {
      publicId: String,
      url: { type: String, required: true },
    },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('FeaturedShow', featuredShowSchema);
