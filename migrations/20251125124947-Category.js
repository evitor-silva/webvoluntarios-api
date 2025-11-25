'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categorias',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: DataTypes.STRING(45), allowNull: false },
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categorias');
  }
};
