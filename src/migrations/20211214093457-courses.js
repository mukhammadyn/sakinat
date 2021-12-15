module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        type: DataTypes.STRING,
        notNull: false
      },
      description: {
        type: DataTypes.STRING(15),
        max: 12,
        unique: true,
        notNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
    queryInterface.dropTable('courses');
  }
};
