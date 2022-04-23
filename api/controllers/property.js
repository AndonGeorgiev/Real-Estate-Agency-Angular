const express = require('express');
const { getAll, getOne, create, deleteProperty } = require('../services/propertyService');
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

const createProperty = async function(req, res) {
    const propertyInformation = req.body;
    console.log(propertyInformation);
    const createProperty = await create(propertyInformation);
    res.json(createProperty);
    res.end();

}

const deleteOne = async function(req, res) {
    let propertyId = req.params.id;
    await deleteProperty(propertyId);
    res.end();
}

router.delete('/properties/delete/:id', deleteOne);
router.post('/properties/create', createProperty);
router.get("/properties", getProperties);
router.get('/properties/:id', getOneProperty);


module.exports = router;