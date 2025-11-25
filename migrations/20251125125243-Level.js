'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('niveis', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: { type: DataTypes.STRING(45), allowNull: false },
      pontos_min: { type: DataTypes.INTEGER, allowNull: false },
      pontos_max: { type: DataTypes.INTEGER, allowNull: false },
      img: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('niveis');
  }
};
