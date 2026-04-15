const { Model, DataTypes } = require('sequelize');

class Ponts extends Model {
  static initModel(sequelize) {
    Ponts.init(
      {
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
      },
      { sequelize, modelName: 'Pontuacao', tableName: 'pontuacoes', timestamps: false }
    );
    return Ponts;
  }
}

module.exports = Ponts;
