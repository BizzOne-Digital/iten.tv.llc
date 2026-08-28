require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const TeamMember = require('../models/TeamMember');

const TEAM = [
  {
    name: 'John "Aussie" D.',
    role: 'D.P. / Editor / Designer / Exec. Producer',
    bio: 'Multi-award winning cinematographer with 30 years of experience spanning 12+ countries. Credits include feature films, commercials, music videos, and major events such as V8 Supercars, F1, MotoGP, NASCAR, NHRA, WRC, the Matrix, Fast and Furious, Star Wars Episode 1, Moulin Rouge, and the Olympics.',
    photo: { url: 'https://picsum.photos/500/500?random=201' },
    order: 1,
  },
  {
    name: 'Valerie "Vegas" D.',
    role: 'Cameras / Producer',
    bio: 'Former Las Vegas entertainment manager with 15+ years of experience in bands, shows, and events. Notably produced the first live stream from the Area 51 gates.',
    photo: { url: 'https://picsum.photos/500/500?random=202' },
    order: 2,
  },
  {
    name: 'Craig "Silverfox" R.',
    role: 'Racing Consultant / Promoter',
    bio: 'Motorsports racer and flat-track racing promoter, with event experience including Flattrack & ATV Rampage and the Idaho Hot Shoe Nationals.',
    photo: { url: 'https://picsum.photos/500/500?random=203' },
    order: 3,
  },
  {
    name: 'Chris "Ninja" V.',
    role: 'Tech Guru / Designer',
    bio: '20+ years of graphic design experience in the racing industry, plus a background as a programmer for major tech companies — the digital and technical specialist behind the network.',
    photo: { url: 'https://picsum.photos/500/500?random=204' },
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
