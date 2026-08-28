require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Service = require('../models/Service');

const SERVICES = [
  {
    title: 'Production',
    slug: 'production',
    description:
      'Full video production services from concept to delivery — location scouting, script development, storyboards, filming, editing, VFX, motion graphics, music, and 3D. We\'ve offered live video streaming since 2011.',
    image: { url: '/clinet1.jpg' },
    order: 1,
  },
  {
    title: 'Creative',
    slug: 'creative',
    description:
      'Professional photography for sports, industrial, fashion, promotions, products, events, food services, and more.',
    image: { url: '/clinet2.jpg' },
    order: 2,
  },
  {
    title: 'Shows',
    slug: 'shows',
    description:
      'We make videos — big, bold, and everywhere. TV, online, corporate... you name it. Original programming built for real audiences.',
    image: { url: '/clinet3.jpg' },
    order: 3,
  },
  {
    title: 'Racing Media',
    slug: 'racing-media',
    description:
      'From full TV productions to hero cards — high-energy promotional videos, event photography, sponsorship proposals, and social media content for race teams and drivers, dirt or pavement.',
    image: { url: '/clinet4.jpg' },
    order: 4,
  },
  {
    title: 'Music Videos & EPKs',
    slug: 'music-videos-epks',
    description:
      'Music videos typically start around $2,000-$3,000 depending on scope — contact us for a custom quote. We also build EPKs (Electronic Press Kits): band bio, photography, and work samples in print and video form.',
    image: { url: 'https://picsum.photos/700/500?random=105' },
    order: 5,
  },
];

const run = async () => {
  await connectDB();

  for (const svc of SERVICES) {
    const existing = await Service.findOne({ slug: svc.slug });
    if (existing) {
      await Service.updateOne({ slug: svc.slug }, svc);
      console.log(`Updated: ${svc.title}`);
    } else {
      await Service.create(svc);
      console.log(`Created: ${svc.title}`);
    }
  }

  await mongoose.connection.close();
  process.exit(0);
};

run().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
