const mongoose = require("mongoose");

const technicalFeaturesSchema = new mongoose.Schema(
  {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    weight: { type: Number, required: true },
    weightCapacity: { type: Number, required: true },
    peopleCapacity: { type: Number, required: true },
    engine: { type: String, required: true },
    power: { type: Number, required: true },
  },
  { _id: false }
);

const equipmentSchema = new mongoose.Schema(
  {
    awning: { type: Boolean, required: true },
    storage: { type: Boolean, required: true },
    nonSlipFloor: { type: Boolean, required: true },
    seatCushions: { type: Boolean, required: true },
    inoxLadder: { type: Boolean, required: true },
    portableFridge: { type: Boolean, required: true },
    audioSystemAndRadio: { type: Boolean, required: true },
    mobileCharger: { type: Boolean, required: true },
    lifeJackets: { type: Boolean, required: true },
    pharmacy: { type: Boolean, required: true },
    spareFuel: { type: Boolean, required: true },
    gps: { type: Boolean, required: true },
  },
  { _id: false }
);

const pricesSchema = new mongoose.Schema(
  {
    priceBeforeSummer: { type: Number, required: true },
    priceDuringSummer: { type: Number, required: true },
    priceAfterSummer: { type: Number, required: true },
  },
  { _id: false }
);

const boatSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    technicalFeatures: { type: technicalFeaturesSchema, required: true },
    equipment: { type: equipmentSchema, required: true },
    prices: { type: pricesSchema, required: true },
  },
  { timestamps: true, collection: "boats" }
);

boatSchema.pre("save", function (next) {
  if (!this.slug) this.slug = this.name.toLowerCase().replace(/ /g, "-");
  next();
});

module.exports = mongoose.model("Boat", boatSchema);
