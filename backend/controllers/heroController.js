const HeroSettings = require('../models/HeroSettings');
const asyncHandler = require('../utils/asyncHandler');

const getHero = asyncHandler(async (req, res) => {
  const hero = await HeroSettings.getSingleton();
  res.json(hero);
});

const updateHero = asyncHandler(async (req, res) => {
  const hero = await HeroSettings.getSingleton();
  const fields = [
    'eyebrowText',
    'headingMain',
    'headingHighlight',
    'headingSub',
    'description',
    'videoUrl',
    'posterImageUrl',
    'ctaPrimaryText',
    'ctaPrimaryLink',
    'ctaSecondaryText',
    'ctaSecondaryLink',
    'platforms',
  ];
  fields.forEach((f) => {
    if (req.body[f] !== undefined) hero[f] = req.body[f];
  });
  await hero.save();
  res.json(hero);
});

module.exports = { getHero, updateHero };
