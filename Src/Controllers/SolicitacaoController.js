const { Solicitacao } = require("../Models/index.js")

const index = async (req, res) => {
    const all = await Solicitacao.findAll();
    return res.send({
        data: all
    })
}

const store = async (req, res) => {
    const person = jwt.verify(req.headers.authorization.substring(7), process.env.JWT_SECRET)
    await Solicitacao.create({
        id_usuario: person.id
    })
    return res.send({
        message: 'Criado com sucesso'
    })
}

module.exports = {
    store,
    index
}