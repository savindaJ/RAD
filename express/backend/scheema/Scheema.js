const mongoose = require('mongoose');


const watchSchema = new mongoose.Schema({
    name: String,
    image: String,
    rating: Number,
    price: Number
});

const Watch = mongoose.model('Watch', watchSchema);

module.exports = Watch;