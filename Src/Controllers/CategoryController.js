const { Category } = require('../Models/index.js')

const index = async (req, res) => {
    const all = await Category.findAll();
    return res.send({
        data: all
    })
}
const store = async (req, res) => {
    const { nome } = req.body;
    try {
        await Category.create({
            nome: nome
        })

        return res.status(201).send({
            "message": "Criado com sucesso"
        })
    } catch (error) {
        return res.status(401).send({
            "message": error
        })
    }
}

module.exports = {
    store,
    index
}