const mongoose = require('mongoose');

const heroSettingsSchema = new mongoose.Schema(
  {
    singletonKey: { type: String, default: 'hero_settings', unique: true },
    eyebrowText: { type: String, default: '' },
    headingMain: { type: String, default: '' },
    headingHighlight: { type: String, default: '' },
    headingSub: { type: String, default: '' },
    description: { type: String, default: '' },
    videoUrl: { type: String, default: '' },
    posterImageUrl: { type: String, default: '' },
    ctaPrimaryText: { type: String, default: '' },
    ctaPrimaryLink: { type: String, default: '' },
    ctaSecondaryText: { type: String, default: '' },
    ctaSecondaryLink: { type: String, default: '' },
    platforms: { type: [String], default: ['Roku', 'Amazon Fire TV'] },
  },
  { timestamps: true }
);

heroSettingsSchema.statics.getSingleton = async function () {
  let doc = await this.findOne({ singletonKey: 'hero_settings' });
  if (!doc) {
    doc = await this.create({ singletonKey: 'hero_settings' });
  }
  return doc;
};

module.exports = mongoose.model('HeroSettings', heroSettingsSchema);
