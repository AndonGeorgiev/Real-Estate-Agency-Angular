const express = require('express');
const router = express.Router();
const property = require('./controllers/property.js');

router.use(property)

module.exports = router;