const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');
const Allergy = require('./allergy');

const File = sequelize.define('file', {
    id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true
    },
    patientName: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    bloodType: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    lastVisited: {
        type: DataTypes.DATE,
        allowNull: true,
        required: false
    }
});

Allergy.belongsTo(File);
module.exports = File;