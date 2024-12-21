const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const routerController = require('../controllers/routerController');
const { isAuthenticated, isAlreadyAuthenticated } = require('../middlewares/authMiddleware');

router.get('/login', isAlreadyAuthenticated, routerController.getLogin);
router.get('/signup', isAlreadyAuthenticated, routerController.getSignUp);
router.post('/login', isAlreadyAuthenticated, userController.loginUser);
router.post('/signup', isAlreadyAuthenticated, userController.createUser);

router.get('/', routerController.getHome);


router.get('/logout', userController.logout);
router.get('/profile', isAuthenticated, routerController.getProfile);
router.get('/users', isAuthenticated, userController.getUsers);
router.get('/cookies', isAuthenticated, (req, res) => res.json(req.session));

router.use(routerController.get404);

module.exports = router;