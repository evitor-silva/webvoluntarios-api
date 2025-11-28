const { Solicitacao } = require("../Models/index.js")

const index = async (req, res) => {
    const all = await Solicitacao.findAll();
    return res.send({
        data: all
    })
}

const store = async (req, res) => {
    await Solicitacao.create({
        id_usuario: req.user.id
    })
    return res.send({
        message: 'Criado com sucesso'
    })
}

module.exports = {
    store,
    index
}