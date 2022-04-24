const express = require('express');
const { getAll, getOne, create, deleteProperty, edit } = require('../services/propertyService');
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
    const createProperty = await create(propertyInformation);
    res.json(createProperty);
    res.end();

}

const deleteOne = async function(req, res) {
    const propertyId = req.params.id;
    await deleteProperty(propertyId);
    res.end();
}

const editProperty = async function(req, res) {
    const propertyInformation = req.body;
    const propertyId = req.params.id;
    await edit(propertyId, propertyInformation);
    res.end();
}

router.delete('/properties/delete/:id', deleteOne);
router.post('/properties/edit/:id', editProperty);
router.post('/properties/create', createProperty);
router.get('/properties/:id', getOneProperty);
router.get("/properties", getProperties);



module.exports = router;