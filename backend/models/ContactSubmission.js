const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    projectType: {
      type: String,
      enum: ['Commercial', 'Racing Content', 'Documentary', 'Brand Partnership', 'Other'],
      default: 'Other',
    },
    message: { type: String, required: true, trim: true },
    imageUrl: { type: String },
    imagePublicId: { type: String },
    status: { type: String, enum: ['New', 'Read', 'Responded'], default: 'New' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ContactSubmission', contactSubmissionSchema);
