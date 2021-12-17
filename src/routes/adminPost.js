const express = require('express');
const ctrl = require('../controllers/AdminPostController');

const router = express.Router({ mergeParams: true });

router.route('/').post(ctrl.addPost);
router.route('/:postId').put(ctrl.updatePost).delete(ctrl.deletePost);

module.exports = router;
