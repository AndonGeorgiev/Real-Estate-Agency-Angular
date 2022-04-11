const Property = require('./../models/propertyModel.js');

exports.getAll = () => Property.find({});