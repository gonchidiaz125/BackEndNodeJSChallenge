const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define('Player', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    position: {
      type: DataTypes.STRING,
  },
    skillLevel: {
        type: DataTypes.STRING
    }
}, 
{
    tableName: 'Players' 
});

module.exports = Player;
