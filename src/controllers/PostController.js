const repository = require('../repositories/PostRepository');

const getPosts = async (req, res) => {
  try {
    const posts = await repository.getPosts();
    res.render('pages/blog', {
      posts
    });
  } catch (error) {
    throw Error(`posts controller [getPosts]:${error}`);
  }
};

const getPost = async (req, res) => {
  try {
    const id = req.params.postId;
    const post = await repository.getPost(id);
    res.render('pages/blog-detail', {
      post: post[0]
    });
  } catch (error) {
    throw Error(`posts controller [getPost]:${error}`);
  }
};

module.exports = {
  getPosts,
  getPost
};
