const pg = require('../utils/pg');

async function getPosts() {
  try {
    return await pg(false, 'SELECT * FROM posts WHERE published=true');
  } catch (error) {
    throw Error(`posts repository [getPosts]:${error}`);
  }
}

async function getPost(id) {
  try {
    return await pg(false, 'SELECT * FROM posts WHERE id=$1 and published=true', id);
  } catch (error) {
    throw Error(`posts repository [getPosts]:${error}`);
  }
}

async function addPost(author_id, title, cover_img, duration, content) {
  try {
    return await pg(
      false,
      'INSERT INTO posts (author_id, title, cover_img, duration, content) VALUES($1, $2, $3, $4, $5) returning *',
      author_id,
      title,
      cover_img,
      duration,
      content
    );
  } catch (error) {
    throw Error(`posts repository [addPost]:${error}`);
  }
}

async function deletePost(id) {
  try {
    return await pg(false, 'UPDATE posts set published=false where id=$1 returning *;', id);
  } catch (error) {
    throw Error(`posts repository [deletePost]:${error}`);
  }
}

async function updatePost(title, cover_img, content, id) {
  try {
    return await pg(
      false,
      'UPDATE posts set title=$1, cover_img=$2, content=$3 where id = $4 returning *;',
      title,
      cover_img,
      content,
      id
    );
  } catch (error) {
    throw Error(`posts repository [updatePost]:${error}`);
  }
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost
};
