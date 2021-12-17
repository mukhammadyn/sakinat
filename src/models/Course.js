const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Course.init(
    {
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
        type: DataTypes.TEXT,
        max: 12,
        unique: true,
        notNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
    },
    {
      sequelize,
      tableName: 'courses',
      modelName: 'Course'
    }
  );
  return Course;
};
