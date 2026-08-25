const express = require('express');
const {
  getTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} = require('../controllers/teamController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', getTeamMembers);
router.get('/:id', getTeamMemberById);
router.post('/', protect, upload.single('photo'), createTeamMember);
router.put('/:id', protect, upload.single('photo'), updateTeamMember);
router.delete('/:id', protect, deleteTeamMember);

module.exports = router;
