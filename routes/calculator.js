var express = require('express');
var router = express.Router();
var calculatorController = require("../controllers/calculatorController")

// DEFINING ENDPOINTS
router.get('/add', (req, res) => {console.log(req.query)
res.send(req.query)})

module.exports = router;
