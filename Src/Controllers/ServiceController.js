const { Service } = require("../Models/index.js")

const index = async (req, res) => {
    const all = await Service.findAll();
    return res.send({
        data: all
    })
}

const store = async (req, res) => {
    const { categorias_id, proprietario_usuario_id, titulo, descricao } = req.body;
    try {
        await Service.create({
            titulo: titulo,
            descricao: descricao,
            categorias_id: categorias_id,
            proprietario_usuario_id: proprietario_usuario_id,
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