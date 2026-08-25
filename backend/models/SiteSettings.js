const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema(
  {
    singletonKey: { type: String, default: 'site_settings', unique: true },
    siteName: { type: String, default: 'iTEN.TV, LLC' },
    tagline: { type: String, default: 'Powered by Passion... Powered by Stories' },
    email: { type: String, default: 'info@iten.tv' },
    phone: { type: String, default: '+1 520-757-3019' },
    facebook: { type: String, default: 'facebook.com/itentvnews' },
    website: { type: String, default: 'iten.tv' },
    address: { type: String, default: '' },
    socials: {
      facebook: { type: String, default: '' },
      instagram: { type: String, default: '' },
      twitter: { type: String, default: '' },
      youtube: { type: String, default: '' },
      linkedin: { type: String, default: '' },
      tiktok: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

siteSettingsSchema.statics.getSingleton = async function () {
  let doc = await this.findOne({ singletonKey: 'site_settings' });
  if (!doc) {
    doc = await this.create({ singletonKey: 'site_settings' });
  }
  return doc;
};

module.exports = mongoose.model('SiteSettings', siteSettingsSchema);
