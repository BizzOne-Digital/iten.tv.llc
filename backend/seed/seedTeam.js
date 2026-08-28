require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const TeamMember = require('../models/TeamMember');

const TEAM = [
  {
    name: 'John "Aussie" D.',
    role: 'D.P / Editor / Designer / Exec. Prod',
    bio: 'iTEN.TV was founded by John D. & Val D. John is a multi-award winning cinematographer, editor and designer. For over 30 years, his work has taken him to over 12 countries and can be seen in everything from feature films, TV shows, TV commercials, music videos, short films, sporting events, magazines, buses, and just about everything else in between.',
    photo: { url: '/aboutpage1.jpg' },
    order: 1,
  },
  {
    name: 'Valerie "Vegas" D.',
    role: 'Cameras / Producer',
    bio: 'Val D. is a former Las Vegas entertainment manager. Her work has spanned over 15 years from bands, shows, and events to putting on the first "LIVE STREAM" from the gates of Area 51 (that\'s another story). She is also a producer and photographer for iTEN.TV. Past projects have included Bagged & Tagged, ISRL, King of the Wing, Rockin\' Rods, Modified Mayhem, just to name a few.',
    photo: { url: '/aboutpage2.jpg' },
    order: 2,
  },
  {
    name: 'Craig "Silverfox" R.',
    role: 'Racing Consultant / Promoter',
    bio: 'Long time motorsports racer, BMX racer, road cyclist, and flat track racing promoter. Craig is an asset to the iTEN.TV team. Not only does he consult with some of the motorcycle community, he also helps promote racing events. Past events have included Flattrack & ATV Rampage and the Idaho Hot Shoe Nationals ft. GNHC.',
    photo: { url: '/aboutpage3.jpg' },
    order: 3,
  },
  {
    name: 'Chris "Ninja" V.',
    role: 'Tech Guru / Designer',
    bio: 'Chris is a veteran graphic designer. He is also a technical wizard when it comes to everything and anything digital. He has been a designer for the racing industry for over 20 years, and a programmer for some of the biggest tech companies in the world. When not working, he can be found riding his motorcycle... somewhere.',
    photo: { url: '/aboutpage4.jpg' },
    order: 4,
  },
];

const run = async () => {
  await connectDB();

  for (const member of TEAM) {
    const existing = await TeamMember.findOne({ name: member.name });
    if (existing) {
      await TeamMember.updateOne({ name: member.name }, member);
      console.log(`Updated: ${member.name}`);
    } else {
      await TeamMember.create(member);
      console.log(`Created: ${member.name}`);
    }
  }

  await mongoose.connection.close();
  process.exit(0);
};

run().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
