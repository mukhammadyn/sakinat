module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('homeSettings', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      contact_number: {
        type: DataTypes.STRING
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
    await queryInterface.dropTable('homeSettings');
  }
};
