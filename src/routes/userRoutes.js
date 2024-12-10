const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');
const { getHome } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHome);

// Using GET temporarily for debugging (will replace with proper method)
router.get('/users', getUsers);
router.get('/create/user', createUser);

module.exports = router;