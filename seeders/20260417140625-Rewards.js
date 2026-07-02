'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('recompensas', [
            {
                acao: "Serviço criado",
                pontos: 10
            },
            {
                acao: "Avaliar um serviço",
                pontos: 15
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('recompensas', null, {})
    }
};
