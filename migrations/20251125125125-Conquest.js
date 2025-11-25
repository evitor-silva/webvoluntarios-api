'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('conquista', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null },
      descricao: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null },
      img: { type: DataTypes.STRING(45), allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('conquista');
  }
};
