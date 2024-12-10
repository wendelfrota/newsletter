const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', (req, res)=>{
    const info = {
        headers: req.headers,
        ip: req.ip,
        method: req.method,
        url: req.originalUrl,
    };
    res.json(info);
});

// Using GET temporarily for debugging (will replace with proper method)
router.get('/users', getUsers);
router.get('/create/user', createUser);

module.exports = router;