const repository = require('../repositories/CourseRepository');

const getCourses = async (req, res) => {
  try {
    const courses = await repository.getCourses();
    res.send(courses);
  } catch (error) {
    throw Error(`courses controller [getCourses]:${error}`);
  }
};

const getCourse = async (req, res) => {
  try {
    const id = req.params.courseId;
    const course = await repository.getCourse(id);
    res.send(course);
  } catch (error) {
    throw Error(`courses controller [getCourse]:${error}`);
  }
};

const addCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const course = await repository.addCourse(title, description);
    res.send(course);
  } catch (error) {
    throw Error(`courses controller [addCourse]:${error}`);
  }
};

const updateCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.courseId;
    const course = await repository.updateCourse(title, description, id);
    res.send(course);
  } catch (error) {
    throw Error(`courses controller [updateCourse]:${error}`);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const id = req.params.courseId;
    const course = await repository.deleteCourse(id);
    res.send(course);
  } catch (error) {
    throw Error(`courses controller [deleteCourse]:${error}`);
  }
};

module.exports = {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse
};
