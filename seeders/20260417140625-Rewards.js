'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('recompensas', [
            {
                acao: "SERVICO_CRIADO",
                pontos: 10
            },
            {
                acao: "AVALIAR_SERVICO",
                pontos: 15
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('recompensas', null, {})
    }
};
