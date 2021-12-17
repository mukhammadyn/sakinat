module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('course_certificates', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      course_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING,
        notNull: false
      },
      description: {
        type: Sequelize.TEXT,
        max: 12,
        unique: true,
        notNull: false
      },
      certificate_img: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('course_certificates');
  }
};
