const Property = require('./../models/propertyModel.js');
const User = require('./../models/userModel');

exports.getAll = () => Property.find({});

exports.getOne = async(id) => {
    let property = await Property.findById(id);
    const update = { views: +property.views + 1 }
    await Property.findByIdAndUpdate(id, update);
    property = await Property.findById(id);
    return property;
};

exports.create = async(propertyInfo) => {
    let newProperty = await Property.create(propertyInfo);

    return newProperty;
};

exports.deleteProperty = async(id) => {
    console.log(2);
    return await Property.findByIdAndDelete(id);
};

exports.sell = async(propertyId, userId) => {
    await Property.findByIdAndDelete(propertyId);
    let user = await User.findById(userId);
    const update = { sells: +user.sells + 1 }
    await User.findByIdAndUpdate(userId, update);
}
exports.like = async(propertyId, userId) => {
    let property1 = await Property.findById(propertyId);
    const update = { views: +property1.views - 1 }
    await Property.findByIdAndUpdate(propertyId, update);
    let property = await Property.findById(propertyId);
    property.likers.push(userId);
    return property.save();
}

exports.dislike = async(propertyId, userId) => {
    let property1 = await Property.findById(propertyId);
    const update = { views: +property1.views - 1 }
    await Property.findByIdAndUpdate(propertyId, update);
    let property = await Property.findById(propertyId);
    property.likers.pull(userId);
    return property.save();
}

exports.saveDate = async(propertyId, savedDateInformation) => {
    let property1 = await Property.findById(propertyId);
    const update = { views: +property1.views - 1 }
    await Property.findByIdAndUpdate(propertyId, update);
    let property = await Property.findById(propertyId);
    property.savedDates.push(savedDateInformation);
    return property.save();
}

exports.edit = (id, update) => Property.findByIdAndUpdate(id, update);

exports.getProperties = (id) => Property.find({ creator: id });
exports.likeProperties = (id) => Property.find({ likers: id })