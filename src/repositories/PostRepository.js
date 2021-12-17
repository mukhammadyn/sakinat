const { Post } = require('../models');

async function getPosts() {
  try {
    return await Post.findAll({
      where: {
        published: true
      }
    });
  } catch (error) {
    throw Error(`posts repository [getPosts]:${error}`);
  }
}

async function getPost(id) {
  try {
    return await Post.findAll({
      where: {
        id
      },
      raw: true
    });
  } catch (error) {
    throw Error(`posts repository [getPost]:${error}`);
  }
}

module.exports = {
  getPosts,
  getPost
};
