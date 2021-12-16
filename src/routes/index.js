const express = require('express');
const homeRoutes = require('./home');
const postsRoutes = require('./posts');

const router = express.Router({ mergeParams: true });

router.use('/', homeRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
