'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servicos', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      categorias_id: { type: DataTypes.INTEGER, allowNull: false },
      proprietario_usuario_id: { type: DataTypes.INTEGER, allowNull: false },
      titulo: { type: DataTypes.STRING(145), allowNull: true, defaultValue: null },
      descricao: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
      status: { type: DataTypes.ENUM('Disponivel', 'Encerrado'), allowNull: true, defaultValue: 'Disponivel' },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('servicos');
  }
};
