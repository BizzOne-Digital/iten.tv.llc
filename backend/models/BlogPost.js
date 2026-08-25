const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    excerpt: { type: String, trim: true, maxlength: 400 },
    content: { type: String, required: true },
    featuredImage: {
      publicId: String,
      url: String,
    },
    seoTitle: { type: String, trim: true },
    seoDescription: { type: String, trim: true },
    author: { type: String, default: 'iTEN.TV Team' },
    published: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

blogPostSchema.index({ title: 'text', excerpt: 'text', content: 'text' });

module.exports = mongoose.model('BlogPost', blogPostSchema);
