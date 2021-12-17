module.exports = {
  up: async (queryInterface) => {
    queryInterface.sequelize.query(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);
    queryInterface.sequelize.query(`
      ALTER TABLE users ALTER COLUMN id SET DEFAULT uuid_generate_v4();
    `);
    queryInterface.sequelize.query(`
      ALTER TABLE users ALTER COLUMN "createdAt" SET DEFAULT now();
    `);
    queryInterface.sequelize.query(`
      ALTER TABLE users ALTER COLUMN "updatedAt" SET DEFAULT now();
    `);
    queryInterface.sequelize.query(`
      ALTER TABLE posts ALTER COLUMN id SET DEFAULT uuid_generate_v4();
    `);
  },
  down: async () => {}
};
