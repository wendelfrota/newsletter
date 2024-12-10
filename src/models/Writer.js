// models/Writer.js
const sequelize = require('../config/database')
const User = require('./User')
const { DataTypes } = require('sequelize')

const Writer = User.prototype.constructor.extend('writer', {
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