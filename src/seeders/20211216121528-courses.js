const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'courses',
      [
        {
          id: uuidv4(),
          title: 'demo course',
          description: 'demo title',
          active: true,
          createdAt: '2021-08-18T05:58:05.618Z',
          updatedAt: '2021-08-18T05:58:05.618Z'
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
