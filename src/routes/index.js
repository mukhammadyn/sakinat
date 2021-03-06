const express = require('express');
const homeRoutes = require('./home');
// const homeSettingsRoutes = require('./homeSettings');
const courseRoutes = require('./courses');
const postsRoutes = require('./posts');
const leadsRoutes = require('./leads');

const router = express.Router({ mergeParams: true });

router.use('/', homeRoutes);
// router.use('/homeSettings', homeSettingsRoutes);
router.use('/courses', courseRoutes);
router.use('/posts', postsRoutes);
router.use('/leads', leadsRoutes);

module.exports = router;
