module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('course_directionals', {
      directional_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'directionals',
          key: 'id'
        }
      },
      course_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('course_directionals');
  }
};
