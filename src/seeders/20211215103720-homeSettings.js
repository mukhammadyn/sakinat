module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'homeSettings',
      [
        {
          id: '123e4567-e89b-12d3-a456-426614174000',
          contact_number: '998901234567',
          createdAt: '2021-08-18T05:58:05.618Z',
          updatedAt: '2021-08-18T05:58:05.618Z'
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('homeSettings', null, {});
  }
};
