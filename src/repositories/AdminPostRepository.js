const { Post } = require('../models');

async function addPost(author_id, title, cover_img, duration, content) {
  try {
    return await Post.create({
      author_id,
      title,
      cover_img,
      duration,
      content
    });
  } catch (error) {
    throw Error(`posts repository [addPost]:${error}`);
  }
}

async function deletePost(id) {
  try {
    return await Post.update(
      { published: false },
      {
        where: {
          id
        }
      }
    );
  } catch (error) {
    throw Error(`posts repository [deletePost]:${error}`);
  }
}

async function updatePost(title, cover_img, content, id) {
  try {
    return await Post.update(
      // prettier-ignore
      {
        title, cover_img, content, id
      },
      {
        where: {
          id
        }
      }
    );
  } catch (error) {
    throw Error(`posts repository [updatePost]:${error}`);
  }
}

module.exports = { addPost, deletePost, updatePost };
