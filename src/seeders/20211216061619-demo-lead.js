module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('leads', [{}], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('leads', null, {});
  }
};
