require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Service = require('../models/Service');

const SERVICES = [
  {
    title: 'Production',
    slug: 'production',
    description:
      'We provide full video production services, from Location Scouting, Script Development, Storyboards, Filming, Editing, VFX, Motion Graphics, music & 3D\n\nWe can also provide "LIVE" video streaming services. We have been streaming since 2011 and know all the tricks to make your production superb & professional.',
    image: { url: '/clinet1.jpg' },
    order: 1,
  },
  {
    title: 'Creative',
    slug: 'creative',
    description:
      'Professional photography for Sports, Industrial, Fashion, Promotions, Products, Events, Food Services plus more.\n\nThese days it seems like everybody can go out and buy a DSLR camera and think they are a professional. But what about that creativity?',
    image: { url: '/clinet4.jpg' },
    order: 2,
  },
  {
    title: 'Shows',
    slug: 'shows',
    description:
      "We make videos, big, bold, and everywhere. TV, online, corporate... you name it.\n\nAnd when we're not bringing client ideas to life, we're busy creating our own original shows for our ROKU channel.",
    image: { url: '/clinet3.jpg' },
    order: 3,
  },
  {
    title: 'Racing Media',
    slug: 'racing-media',
    description:
      'From full TV productions to hero cards - high-energy promotional videos, event photography, sponsorship proposals, and social media content for race teams and drivers, dirt or pavement.',
    image: { url: '/racingmedia.jpg' },
    order: 4,
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
