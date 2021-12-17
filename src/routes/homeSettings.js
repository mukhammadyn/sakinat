const express = require('express');
const ctrl = require('../controllers/HomeSettingsController');

const router = express.Router({ mergeParams: true });

router.get('/', ctrl.homeSettings);

module.exports = router;
