const { Rewards } = require("../Models/Rewards");
const { Ponts } = require("../Models/Ponts");

const Gamificacao = async (acao, usuarioId, servicoId) => {
    try {
        const getGame = await Rewards.findOne({ where: { acao } });
        if (!getGame) {
            throw new Error("Recompensa não encontrada para a ação: " + acao);
        }

        await Ponts.create({
            id_recompensa: getGame.id,
            id_usuario: usuarioId,
            id_servico: servicoId,
            data: new Date()
        });

        return { success: true, message: "Pontuação registrada com sucesso!" };
    } catch (error) {
        console.error("Erro na gamificação:", error);
        return { success: false, message: "Erro ao registrar pontuação" };
    }
};

module.exports = Gamificacao;
