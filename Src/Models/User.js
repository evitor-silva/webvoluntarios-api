const { DataTypes, Model, Sequelize } = require('sequelize');

class User extends Model {
  static initModel(sequelize) {
    User.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(45), allowNull: false },
      email: { type: DataTypes.STRING(45), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(255), allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    }, {
      sequelize, 
      tableName: "users",
      modelName: "User",
    });
    return User;
  }
}

module.exports = User;
