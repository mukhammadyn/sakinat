const express = require('express');
const homeRoutes = require('./home');

const router = express.Router({ mergeParams: true });

router.use('/', homeRoutes);

module.exports = router;
