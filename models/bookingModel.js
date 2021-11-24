const mongoose = require ("mongoose");

const bookingSchema = new mongoose.Schema ({

    bike : {type: mongoose.Schema.Types.ObjectId, ref:'bikes'},
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    bookedTimeSlots : {
        from : {type : String} ,
        to : {type : String}
    } ,
    totalDays : {type: Number},
    totalAmount : {type: Number},
    transactionId : {type: String},
    premiumRequired : {type: Boolean}
},

{timestamps : true}
)

const bookingModel = mongoose.model('booking', bookingSchema)

module.exports = bookingModel