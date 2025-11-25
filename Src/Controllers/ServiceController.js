const { Service } = require("../Models/index.js")
const jwt = require('jsonwebtoken');

const index = async (req, res) => {
    const all = await Service.findAll();
    return res.send({
        data: all
    })
}

const store = async (req, res) => {
    const { categorias_id, titulo, descricao } = req.body;
    const person = jwt.verify(req.headers.authorization.substring(7), process.env.JWT_SECRET)

    try {
        await Service.create({
            titulo: titulo,
            descricao: descricao,
            categorias_id: categorias_id,
            proprietario_usuario_id: person.id,
        })

        return res.status(201).send({
            message: "Serviço criado com sucesso"
        })

    } catch (error) {
        return res.status(401).send(
            { message: error }
        )
    }
}

module.exports = {
    store,
    index
}