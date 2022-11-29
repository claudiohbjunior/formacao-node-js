const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '21bubassauro12', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;