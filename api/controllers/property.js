const express = require('express');
const { getAll } = require('../services/propertyService');
const router = express.Router();


const getProperties = async function(req, res) {
    const allProperties = await getAll();
    res.json(allProperties);
    res.end();
}

router.get("/properties", getProperties);

module.exports = router;