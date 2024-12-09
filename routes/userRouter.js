const express = require('express');
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

module.exports = router;