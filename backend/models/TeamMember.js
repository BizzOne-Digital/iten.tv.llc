const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    bio: { type: String, trim: true },
    photo: {
      publicId: String,
      url: String,
    },
    order: { type: Number, default: 0 },
    socials: {
      instagram: String,
      twitter: String,
      linkedin: String,
      facebook: String,
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TeamMember', teamMemberSchema);
