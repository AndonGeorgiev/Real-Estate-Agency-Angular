const express = require('express');
const { getAll, getOne } = require('../services/propertyService');
const router = express.Router();


const getProperties = async function(req, res) {
    const allProperties = await getAll();
    res.json(allProperties);
    res.end();
}

const getOneProperty = async function(req, res) {
    const propertyId = req.params.id;
    const property = await getOne(propertyId);
    res.json(property);
    res.end();
}



router.get("/properties", getProperties);
router.get('/properties/:id', getOneProperty);

module.exports = router;