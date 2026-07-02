const {Service} = require("../Models/index.js")
const jwt = require('jsonwebtoken');
const sequelize = require("../Database/db");
const gamificationEvents = require('../Util/Gamificacao');


const index = async (req, res) => {
    const all = await Service.findAll({
        include: [{
            association: 'proprietario',
            attributes: ['name']
        }]
    });

    return res.send({
        data: all
    })
}

const store = async (req, res) => {
    const t = await sequelize.transaction();
    let servicoSalvo;

    try {
        const servico = await Service.create({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            categorias_id: req.body.categorias_id,
            proprietario_usuario_id: req.user.id
        }, { transaction: t });

        await t.commit();

        gamificationEvents.emit('disparar_pontuacao', {
            acao: "SERVICO_CRIADO",
            usuarioId: req.user.id,
            servicoId: servicoSalvo.id
        });
    } catch (error) {
        await t.rollback();
        console.error("Erro ao salvar serviço no banco:", error);
        return res.status(500).json({ error: "Erro ao criar serviço." });
    }

    return res.status(201).json(servicoSalvo);
};

module.exports = {
    store,
    index
}