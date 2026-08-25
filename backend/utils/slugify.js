const slugifyLib = require('slugify');

const makeSlug = (text) => {
  return slugifyLib(text || '', { lower: true, strict: true, trim: true });
};

module.exports = makeSlug;
