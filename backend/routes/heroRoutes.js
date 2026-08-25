const express = require('express');
const { getHero, updateHero } = require('../controllers/heroController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', getHero);
router.put('/', protect, updateHero);

module.exports = router;
