module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          password: 'qwerty',
          phone_number: '998901234567',
          createdAt: '2021-08-18T05:58:03.618Z',
          updatedAt: '2021-08-18T05:58:03.618Z'
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
