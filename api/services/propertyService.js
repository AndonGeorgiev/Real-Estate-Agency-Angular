const Property = require('./../models/propertyModel.js');

exports.getAll = () => Property.find({});
exports.getOne = async(_id) => {
    let property = await Property.findById(_id);
    const update = { views: +property.views + 1 }
    await Property.findByIdAndUpdate(_id, update);
    property = await Property.findById(_id);
    return property;
};

exports.create = async(propertyInfo) => {
    let newProperty = await Property.create(propertyInfo);

    return newProperty;
}

exports.deleteProperty = async(id) => {
    console.log(2);
    return await Property.findByIdAndDelete(id);
}
exports.findByIdAndUpdate = (id, update) => Property.findByIdAndUpdate(id, update);