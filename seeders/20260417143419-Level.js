'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("niveis", [
            {
                nome: "Bronze",
                pontos_min: 0,
                pontos_max: 200,
                img: ""
            },
            {
                nome: "Prata",
                pontos_min: 200,
                pontos_max: 500,
                img: ""
            },
            {
                nome: "Ouro",
                pontos_min: 500,
                pontos_max: 1000,
                img: ""
            },
            {
                nome: "Diamante",
                pontos_min: 1000,
                pontos_max: 1800,
                img: ""
            }
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('niveis');
    }
};
