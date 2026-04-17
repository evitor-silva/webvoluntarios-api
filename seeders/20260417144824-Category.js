'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("categorias", [
            {nome: "Tecnologia"},
            {nome: "Outros"}
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('categorias');
    }
};
