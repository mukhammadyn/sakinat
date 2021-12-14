const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasOne(models.Baskets, {
        foreignKey: 'UserId',
        as: 'users',
        onDelete: 'cascade',
        hooks: true
      });
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      password: {
        type: DataTypes.STRING,
        notNull: false
      },
      phone_number: {
        type: DataTypes.STRING(15),
        max: 12,
        unique: true,
        notNull: false
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User'
    }
  );
  return User;
};
