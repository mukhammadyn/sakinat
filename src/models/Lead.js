const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lead extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // define association here
  }

  Lead.init(
    {
      full_name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      course_id: {
        type: DataTypes.UUID,
        references: {
          model: 'Course',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'leads',
      modelName: 'Lead'
    }
  );
  return Lead;
};
