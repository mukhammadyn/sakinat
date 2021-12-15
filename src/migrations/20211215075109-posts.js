module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      author_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cover_img: {
        type: DataTypes.STRING,
        allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      published: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('posts');
  }
};
