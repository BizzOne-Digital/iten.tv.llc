const SiteSettings = require('../models/SiteSettings');
const asyncHandler = require('../utils/asyncHandler');

const getSettings = asyncHandler(async (req, res) => {
  const settings = await SiteSettings.getSingleton();
  res.json(settings);
});

const updateSettings = asyncHandler(async (req, res) => {
  const settings = await SiteSettings.getSingleton();
  const fields = ['siteName', 'tagline', 'email', 'phone', 'facebook', 'website', 'address'];
  fields.forEach((f) => {
    if (req.body[f] !== undefined) settings[f] = req.body[f];
  });
  if (req.body.socials) {
    settings.socials = { ...settings.socials.toObject?.() ?? settings.socials, ...req.body.socials };
  }
  await settings.save();
  res.json(settings);
});

module.exports = { getSettings, updateSettings };
