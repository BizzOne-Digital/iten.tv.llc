const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema(
  {
    publicId: { type: String, required: true },
    secureUrl: { type: String, required: true },
    filename: { type: String },
    format: { type: String },
    resourceType: { type: String, default: 'image' },
    bytes: { type: Number },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Media', mediaSchema);
