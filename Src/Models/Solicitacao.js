const { Model, DataTypes } = require('sequelize');

class Solicitacao extends Model {
    static initModel(sequelize) {
        Solicitacao.init(
            {
                id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
                solicitacoes_id: { type: DataTypes.INTEGER, allowNull: false },
                id_usuario: { type: DataTypes.INTEGER, allowNull: false },
            },
            { sequelize, modelName: 'Solicitacao', tableName: 'Solicitacao', timestamps: false }
        );
        return Solicitacao;
    }
}

module.exports = Solicitacao;
