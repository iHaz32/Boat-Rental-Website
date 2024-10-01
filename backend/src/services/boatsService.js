const Boat = require('../database/schemas/boatSchema');

exports.getAllPreview = async () => {
    const boats = await Boat.find({}, 'name description image technicalFeatures.peopleCapacity slug');
    if (!boats) {
        throw new Error("Can not load the boats");
    }
    return boats;
};

exports.getBoat = async ( slug ) => {
    const boat = await Boat.findOne({ slug: slug });
    if (!boat) {
        throw new Error("No boat found");
    }
    return boat;
};
