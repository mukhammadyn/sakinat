module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('course-topics', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      topic: {
        type: DataTypes.STRING,
        notNull: false
      },
      description: {
        type: DataTypes.TEXT,
        unique: true,
        notNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('course-topics');
  }
};
