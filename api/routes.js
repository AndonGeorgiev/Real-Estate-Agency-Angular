const express = require('express');
const router = express.Router();
const property = require('./controllers/property.js');
const auth = require('./controllers/userController.js')

router.use(property)
router.use(auth)

module.exports = router;