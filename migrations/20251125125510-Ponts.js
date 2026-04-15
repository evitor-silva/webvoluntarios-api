'use strict';

const { DataTypes } = require('sequelize');
const { User, Rewards, Service } = require('../src/Models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pontuacoes', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      id_recompensa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'recompensas',
          key: 'id'
        }
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      id_servico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'servicos',
          key: 'id'
        }
      },
      data: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pontuacoes');
  }
};
