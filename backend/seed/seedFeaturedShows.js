require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const FeaturedShow = require('../models/FeaturedShow');

const SHOWS = [
  { title: 'Street Legends', genre: 'Racing', image: { url: '/new1.jpg' }, order: 1 },
  { title: 'Garage Builds', genre: 'Automotive', image: { url: '/new2.jpg' }, order: 2 },
  { title: 'Track Day Diaries', genre: 'Racing', image: { url: '/new3.jpg' }, order: 3 },
  { title: 'Horsepower Nation', genre: 'Automotive', image: { url: '/new4.jpg' }, order: 4 },
  { title: 'Drift Kings', genre: 'Racing', image: { url: '/new5.jpg' }, order: 5 },
  { title: 'Custom Culture', genre: 'Automotive', image: { url: '/new6.jpg' }, order: 6 },
];

const run = async () => {
  await connectDB();
  const existing = await FeaturedShow.countDocuments();
  if (existing > 0) {
    console.log(`Already have ${existing} featured shows, skipping seed.`);
  } else {
    await FeaturedShow.insertMany(SHOWS);
    console.log(`Seeded ${SHOWS.length} featured shows.`);
  }
  await mongoose.connection.close();
  process.exit(0);
};
run().catch((err) => { console.error(err); process.exit(1); });
