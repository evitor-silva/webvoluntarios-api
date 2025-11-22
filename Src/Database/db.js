const { Sequelize } = require('sequelize');


require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: true,
    define: {
        timestamps: false,
        underscored: false,
    },
});

try {
    sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso!");
} catch (error) {
    console.error("Erro ao conectar no banco:", error);
}

module.exports = sequelize;
