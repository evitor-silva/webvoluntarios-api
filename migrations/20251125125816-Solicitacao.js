'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solicitacao', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      solicitacoes_id: { type: DataTypes.INTEGER, allowNull: false },
      id_usuario: { type: DataTypes.INTEGER, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Solicitacao');
  }
};
