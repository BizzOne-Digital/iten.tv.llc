const Admin = require('../models/Admin');
const asyncHandler = require('../utils/asyncHandler');
const generateToken = require('../utils/generateToken');

// POST /api/auth/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required');
  }
  const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
  if (!admin || !(await admin.comparePassword(password))) {
    res.status(401);
    throw new Error('Invalid email or password');
  }
  const token = generateToken({ id: admin._id, role: admin.role });
  res.json({
    token,
    admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role },
  });
});

// GET /api/auth/me
const getMe = asyncHandler(async (req, res) => {
  res.json({ admin: req.admin });
});

module.exports = { login, getMe };
