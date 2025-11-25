'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('usuarios_conquistas',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        id_usuario: { type: DataTypes.INTEGER, allowNull: false },
        id_conquista: { type: DataTypes.INTEGER, allowNull: false },
        data: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      }
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios_conquistas');
  }
};
