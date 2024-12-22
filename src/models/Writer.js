const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')

const Writer = sequelize.define('writer',
{
    specialization: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = Writer;