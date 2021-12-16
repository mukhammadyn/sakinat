const express = require('express');
const ctrl = require('../controllers/CourseController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getCourses).post(ctrl.addCourse);
router.route('/:courseId').get(ctrl.getCourse).put(ctrl.updateCourse).delete(ctrl.deleteCourse);

module.exports = router;
