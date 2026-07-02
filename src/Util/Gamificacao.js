const { EventEmitter } = require('events');
const gamificationEvents = new EventEmitter();

const { Recompensa } = require("../models");
const { Pontuacao } = require("../models");

gamificationEvents.on('disparar_pontuacao', async (data) => {
    const { acao, usuarioId, servicoId } = data;

    try {
        const getGame = await Recompensa.findOne({
            where: { acao },
            attributes: ['id']
        });

        if (!getGame) {
            console.error(`[Gamificação] Recompensa não encontrada para a ação: ${acao}`);
            return;
        }

        await Pontuacao.create({
            id_recompensa: getGame.id,
            id_servico: servicoId,
            id_usuario: usuarioId,
            data: new Date()
        });

        console.log(`[Gamificação] Sucesso: Ação '${acao}' computada para o usuário ${usuarioId}`);
    } catch (error) {
        console.error("Erro em background na gamificação:", error);
    }
});

module.exports = gamificationEvents;