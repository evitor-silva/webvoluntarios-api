'use strict';

const { DataTypes } = require('sequelize');
const { Solicitacao, User } = require('../src/Models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solicitacao', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Solicitacao');
  }
};
