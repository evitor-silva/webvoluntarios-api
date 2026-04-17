const {Pontuacao, Recompensa, User} = require('../Models/index.js');
const {Sequelize} = require("sequelize");

const index = async (req, res) => {
    try {
        const ranking = await Pontuacao.findAll({
            attributes: [
                "id_usuario",
                [Sequelize.fn("SUM", Sequelize.col("Recompensa.pontos")), "total_pontos"]
            ],
            include: [
                {
                    model: Recompensa,
                    as: "Recompensa",
                    attributes: []
                },
                {
                    model: User,
                    as: "Usuario",
                    attributes: ["name"]
                }
            ],
            group: ["Pontuacao.id_usuario", "Usuario.id", "Usuario.name"],
            order: [[Sequelize.literal("total_pontos"), "DESC"]],
            limit: 5
        });

        return res.status(200).send({data: ranking});

    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Erro ao buscar ranking"});
    }
};

module.exports = {
    index
};