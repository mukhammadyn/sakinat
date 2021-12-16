const express = require('express');
const homeRoutes = require('./home');
const homeSettingsRoutes = require('./homeSettings');
const postsRoutes = require('./posts');

const router = express.Router({ mergeParams: true });

router.use('/', homeRoutes);
router.use('/homeSettings', homeSettingsRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
