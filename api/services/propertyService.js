const Property = require('./../models/propertyModel.js');

exports.getAll = () => Property.find({});
exports.getOne = (_id) => Property.findById(_id)