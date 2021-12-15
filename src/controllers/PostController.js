const repository = require('../repositories/PostRepository');

const getPosts = async (req, res) => {
  try {
    const posts = await repository.getPosts();
    res.send(posts);
  } catch (error) {
    throw Error(`posts controller [getPosts]:${error}`);
  }
};

const getPost = async (req, res) => {
  try {
    const id = req.params.postId;
    const post = await repository.getPost(id);
    res.send(post);
  } catch (error) {
    throw Error(`posts controller [getPost]:${error}`);
  }
};

const addPost = async (req, res) => {
  try {
    const { title, cover_img, content } = req.body;
    const author_id = 'd7b58176-049a-4f98-982a-722d07ec99b2'; // jwt dan olinadi keyinchalik
    const duration = Math.ceil(content.length / 50);
    const post = await repository.addPost(author_id, title, cover_img, duration, content);
    res.send(post);
  } catch (error) {
    throw Error(`posts controller [addPost]:${error}`);
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, cover_img, content } = req.body;
    const id = req.params.postId;
    const post = await repository.updatePost(title, cover_img, content, id);
    res.send(post);
  } catch (error) {
    throw Error(`posts controller [updatePost]:${error}`);
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.postId;
    const post = await repository.deletePost(id);
    res.send(post);
  } catch (error) {
    throw Error(`posts controller [deletePost]:${error}`);
  }
};

module.exports = {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost
};
