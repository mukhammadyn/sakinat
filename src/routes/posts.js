const express = require('express');
const ctrl = require('../controllers/PostController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getPosts);
router.route('/:postId').get(ctrl.getPost);
module.exports = router;
