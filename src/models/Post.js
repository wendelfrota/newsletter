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
        type: DataTypes.TEXT,
        allowNull: false,
    },
    writerId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Writers',
            key: 'email'
        }
    }
});

module.exports = Post;