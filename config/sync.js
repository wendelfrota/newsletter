require('dotenv').config();

const sequelize = require('./database');
const User = require('../models/User');
const Post = require('../models/Post');

const isDevelopment = process.env.NODE_ENV === 'development';

const synchronizeDatabase = async () => {
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`isDevelopment: ${isDevelopment}`);

    try {
        console.log('Starting database synchronization...');
        await sequelize.sync({ force: isDevelopment });
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Error during database synchronization:', error);
    } finally {
        console.log('Closing database connection...');
        await sequelize.close();
        console.log('Database connection closed');
    }
};

synchronizeDatabase();
