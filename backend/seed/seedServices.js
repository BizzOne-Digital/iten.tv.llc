require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Service = require('../models/Service');

const SERVICES = [
  {
    title: 'Video Production',
    slug: 'video-production',
    description:
      'Full-service video production from concept through final edit — automotive shows, brand films, and broadcast-quality episodic content. Video productions available from $500+ — contact us for a custom quote.',
    image: { url: 'https://picsum.photos/700/500?random=101' },
    order: 1,
  },
  {
    title: 'Event Coverage',
    slug: 'event-coverage',
    description:
      'Multi-camera coverage of races, car shows, and automotive events — capturing the action, the crowd, and the stories on-site.',
    image: { url: 'https://picsum.photos/700/500?random=102' },
    order: 2,
  },
  {
    title: 'Promotional Video',
    slug: 'promotional-video',
    description:
      'Professional marketing and commercial content built to convert — for dealerships, shops, and automotive brands.',
    image: { url: 'https://picsum.photos/700/500?random=103' },
    order: 3,
  },
  {
    title: 'Automotive Content',
    slug: 'automotive-content',
    description:
      'Original shows and entertainment programming built for car and motorcycle audiences — muscle cars, exotics, and custom builds.',
    image: { url: 'https://picsum.photos/700/500?random=104' },
    order: 4,
  },
  {
    title: 'Post Production',
    slug: 'post-production',
    description:
      'Editing, color, motion graphics, and delivery — turning raw footage into broadcast-ready episodes and campaigns.',
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
