var express = require('express');
var router = express.Router();

// DEFINING ENDPOINTS
router.get('/test', (req, res) => {
    res.send('Hello World!')
})

router.get('/about', (req, res) => {
    res.send("About us")
})

module.exports = router;
