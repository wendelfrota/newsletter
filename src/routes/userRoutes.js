const express = require('express');
const userController = require('../controllers/userController');
const routerController = require('../controllers/routerController');
const router = express.Router();

router.get('/', routerController.getHome);
router.get('/login', routerController.getLogin);
router.get('/signup', routerController.getSignUp);

router.post('/signup', userController.createUser);

// Using GET temporarily for debugging (will replace with proper method)
router.get('/users', userController.getUsers);

router.use(routerController.get404)

module.exports = router;