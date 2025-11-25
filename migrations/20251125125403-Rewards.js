'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recompensas', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      acao: { type: DataTypes.STRING(45), allowNull: false },
      pontos: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    });
  },

  async down(queryInterface, Sequelize) {

     await queryInterface.dropTable('recompensas');

  }
};
