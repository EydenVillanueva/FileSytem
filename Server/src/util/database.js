const Sequelize = require('sequelize');

const sequelize = new Sequelize('filedb', 'postgres', 'root', {
    dialect: 'postgres',
    host: 'localhost'
});

module.exports = sequelize;

