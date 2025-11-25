
const { Avaliation } = require("../Models/index.js")

const index = async (req, res) => {
    const all = await Avaliation.findAll();
    return res.send({
        data: all
    })
}
const store = async (req, res) => {
    const { nome } = req.body;
}

module.exports = {
    store,
    index
}