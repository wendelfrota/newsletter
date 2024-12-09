const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    _salt: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = User;