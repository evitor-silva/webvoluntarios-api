const {Service} = require("../Models/index.js")
const {Gameficacao} = require("../Util/Gamificacao")
const jwt = require('jsonwebtoken');

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
    const {categorias_id, titulo, descricao} = req.body;

    try {
        const servico = await Service.create({
            titulo: titulo,
            descricao: descricao,
            categorias_id: categorias_id,
            proprietario_usuario_id: req.user.id,
        })

        return res.status(201).send({
            message: "Serviço criado com sucesso"
        })

        Gameficacao("Serviço criado", req.user.id, servico.get().id);

    } catch (error) {
        return res.status(401).send(
            {message: error}
        )
    }
}

module.exports = {
    store,
    index
}