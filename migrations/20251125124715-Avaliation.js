'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacaos', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      solicitacoes_id: { type: DataTypes.INTEGER, allowNull: false },
      comentario: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
      nota: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      data: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('avaliacaos');
  }
};
