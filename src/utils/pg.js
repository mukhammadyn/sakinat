const { Pool } = require('pg');
const { POSTGRES } = require('../../config');

const pool = new Pool(POSTGRES);

module.exports = async (oneRow, query, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(query, params);
    return oneRow ? rows[0] : rows;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  } finally {
    await client.release();
  }
};
