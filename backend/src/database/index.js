const mongoose = require('mongoose');   // import mongoose
const Boat = require('./schemas/boatSchema');

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log('Connected to DB!'))
    .catch((err) => console.log(err));