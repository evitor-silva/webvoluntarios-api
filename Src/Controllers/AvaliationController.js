
const { Avaliation } = require("../Models/index.js")

const index = async (req, res) => {
    const all = await Avaliation.findAll();
    return res.send({
        data: all
    })
}
const store = async (req, res) => {
    const { comentario, solicitacoes_id, nota, data } = req.body;
    try {
        await Avaliation.create({
            solicitacoes_id: solicitacoes_id,
            comentario: comentario,
            nota: nota,
            data: data
        })

        return res.send({
            message: "Avaliação criada com sucesso"
        })

    } catch (error) {
        return res.status(401).send({
            message: error
        })
    }

}

module.exports = {
    store,
    index
}