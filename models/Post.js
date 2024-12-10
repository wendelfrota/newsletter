const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')

const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    writer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Post;