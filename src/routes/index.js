const express = require('express');
const homeRoutes = require('./home');
const postsRoutes = require('./posts');
const leadsRoutes = require('./leads');

const router = express.Router({ mergeParams: true });

router.use('/', homeRoutes);
router.use('/posts', postsRoutes);
router.use('/leads', leadsRoutes);

module.exports = router;
