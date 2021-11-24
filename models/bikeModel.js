const mongoose = require ("mongoose");

const bikeScheme = new mongoose.Schema ({

    name: {type: String, required: true} ,
    image: {type: String, required: true},
    type: {type: String, required: true} ,
    category: {type: String, required: true},
    bookSlots: [
        {
            from: {type: String, required: true},
            to: {type: String, required: true}
        }
    ],

    rentPerDay :{type: String, required: true}

}, {timestamps : true}

)

const bikeModel = mongoose.model('bikes', bikeScheme)
module.exports = bikeModel