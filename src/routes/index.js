const express = require('express');
const homeRoutes = require('./home');
const homeSettingsRoutes = require('./homeSettings');

const router = express.Router({ mergeParams: true });

router.use('/', homeRoutes);
router.use('/homeSettings', homeSettingsRoutes);

module.exports = router;
