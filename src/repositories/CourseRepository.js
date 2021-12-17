const { Course } = require('../models');

async function getCourses() {
  try {
    return await Course.findAll({
      where: {
        active: true
      }
    });
  } catch (error) {
    throw Error(`courses repository [getCourses]:${error}`);
  }
}

async function getCourse(id) {
  try {
    return await Course.findOne({
      where: {
        id
      }
    });
  } catch (error) {
    throw Error(`courses repository [getCourse]:${error}`);
  }
}

async function addCourse(title, description) {
  try {
    return await Course.create({
      title,
      description
    });
  } catch (error) {
    throw Error(`courses repository [addCourse]:${error}`);
  }
}

async function updateCourse(title, description, id) {
  try {
    return await Course.update(
      {
        title, description
      },
      {
        where: {
          id
        }
      }
    );
  } catch (error) {
    throw Error(`courses repository [updateCourse]:${error}`);
  }
}

async function deleteCourse(id) {
  try {
    return await Course.update(
      { active: false },
      {
        where: {
          id
        }
      }
    );
  } catch (error) {
    throw Error(`courses repository [deleteCourse]:${error}`);
  }
}

module.exports = {
  getCourses,
  getCourse,
  addCourse,
  deleteCourse,
  updateCourse
};
