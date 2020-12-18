const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Allergy = sequelize.define('allergy', {
  id: {
    type: DataTypes.UUID,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true
  },
  allergyName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  medicament: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Allergy;