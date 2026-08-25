require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Admin = require('../models/Admin');

const run = async () => {
  await connectDB();

  const email = (process.env.ADMIN_SEED_EMAIL || 'admin@iten.tv').toLowerCase().trim();
  const password = process.env.ADMIN_SEED_PASSWORD || 'ChangeMe123!';
  const name = process.env.ADMIN_SEED_NAME || 'Admin';

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log(`Admin already exists for ${email} — skipping.`);
  } else {
    await Admin.create({ name, email, password, role: 'superadmin' });
    console.log(`Admin created: ${email}`);
  }

  await mongoose.connection.close();
  process.exit(0);
};

run().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
