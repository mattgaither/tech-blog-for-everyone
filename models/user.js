const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

// Create out of user model
class User extends  Model {};

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        lens: [6]
      }
    }
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 15);
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true, //
    modelName: 'user',
  }
);

module.exports = User;