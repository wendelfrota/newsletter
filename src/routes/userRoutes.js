const express = require('express');
const userController = require('../controllers/userController');
const homeController = require('../controllers/routerController');
const router = express.Router();

router.get('/', homeController.getHome);

// Using GET temporarily for debugging (will replace with proper method)
router.get('/users', userController.getUsers);
router.get('/create/user', userController.createUser);

router.use(homeController.get404)

module.exports = router;