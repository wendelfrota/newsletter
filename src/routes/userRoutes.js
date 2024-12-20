const express = require('express');
const userController = require('../controllers/userController');
const routerController = require('../controllers/routerController');
const router = express.Router();

function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        res.redirect('/login');
    }
}

function isAlreadyAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return res.redirect('/');
    } else {
        return next();
    }
}


router.get('/', routerController.getHome);
router.get('/login', isAlreadyAuthenticated, routerController.getLogin);
router.get('/signup', isAlreadyAuthenticated, routerController.getSignUp);
router.get('/cookies', isAuthenticated, (req, res) => res.json(req.session));

router.post('/signup', isAlreadyAuthenticated, userController.createUser);
router.post('/login', isAlreadyAuthenticated, userController.loginUser);

// Using GET temporarily for debugging (will replace with proper method)
router.get('/users', isAuthenticated, userController.getUsers);

router.use(routerController.get404)

module.exports = router;