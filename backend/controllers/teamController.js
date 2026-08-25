const TeamMember = require('../models/TeamMember');
const asyncHandler = require('../utils/asyncHandler');
const { streamUpload, deleteImage } = require('../services/cloudinaryService');

const getTeamMembers = asyncHandler(async (req, res) => {
  const filter = req.admin ? {} : { active: true };
  const members = await TeamMember.find(filter).sort({ order: 1, createdAt: 1 });
  res.json(members);
});

const getTeamMemberById = asyncHandler(async (req, res) => {
  const member = await TeamMember.findById(req.params.id);
  if (!member) {
    res.status(404);
    throw new Error('Team member not found');
  }
  res.json(member);
});

const createTeamMember = asyncHandler(async (req, res) => {
  const { name, role, bio, order, active, instagram, twitter, linkedin, facebook } = req.body;
  if (!name || !role) {
    res.status(400);
    throw new Error('Name and role are required');
  }
  let photo;
  if (req.file) {
    const result = await streamUpload(req.file.buffer, 'iten-tv/team');
    photo = { publicId: result.public_id, url: result.secure_url };
  }
  const member = await TeamMember.create({
    name,
    role,
    bio,
    photo,
    order: order || 0,
    active: active === undefined ? true : active === 'true' || active === true,
    socials: { instagram, twitter, linkedin, facebook },
  });
  res.status(201).json(member);
});

const updateTeamMember = asyncHandler(async (req, res) => {
  const member = await TeamMember.findById(req.params.id);
  if (!member) {
    res.status(404);
    throw new Error('Team member not found');
  }
  const { name, role, bio, order, active, instagram, twitter, linkedin, facebook } = req.body;
  if (name !== undefined) member.name = name;
  if (role !== undefined) member.role = role;
  if (bio !== undefined) member.bio = bio;
  if (order !== undefined) member.order = order;
  if (active !== undefined) member.active = active === 'true' || active === true;
  member.socials = {
    instagram: instagram ?? member.socials?.instagram,
    twitter: twitter ?? member.socials?.twitter,
    linkedin: linkedin ?? member.socials?.linkedin,
    facebook: facebook ?? member.socials?.facebook,
  };
  if (req.file) {
    if (member.photo?.publicId) await deleteImage(member.photo.publicId);
    const result = await streamUpload(req.file.buffer, 'iten-tv/team');
    member.photo = { publicId: result.public_id, url: result.secure_url };
  }
  await member.save();
  res.json(member);
});

const deleteTeamMember = asyncHandler(async (req, res) => {
  const member = await TeamMember.findById(req.params.id);
  if (!member) {
    res.status(404);
    throw new Error('Team member not found');
  }
  if (member.photo?.publicId) await deleteImage(member.photo.publicId);
  await member.deleteOne();
  res.json({ message: 'Team member deleted' });
});

module.exports = {
  getTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
};
