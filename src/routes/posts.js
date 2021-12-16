const express = require('express');
const ctrl = require('../controllers/PostController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getPosts).post(ctrl.addPost);
router.route('/:postId').get(ctrl.getPost).put(ctrl.updatePost).delete(ctrl.deletePost);

module.exports = router;
