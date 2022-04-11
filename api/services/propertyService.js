const Property = require('./../models/propertyModel.js');

exports.getAll = () => Property.find({});
exports.getOne = async(_id) => {
    let property = await Property.findById(_id);
    const update = { views: +property.views + 1 }
    await Property.findByIdAndUpdate(_id, update);
    property = await Property.findById(_id);
    return property;
};
exports.findByIdAndUpdate = (id, update) => Property.findByIdAndUpdate(id, update);