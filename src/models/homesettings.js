const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HomeSettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  HomeSettings.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    contact_number: {
      type: DataTypes.STRING,
      notNull: false
    },
  }, {
    sequelize,
    tableName: 'homeSettings',
    modelName: 'HomeSettings',
  });
  return HomeSettings;
};
