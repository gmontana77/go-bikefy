const express = require("express");
const router = express.Router();
const Booking = require('../models/bookingModel')
const Bike = require('../models/bikeModel')

router.post("/bookbike", async(req, res) => {

    req.body.transactionId = '1234'

    try {
        const newbooking = new Booking(req.body)
        await newbooking.save()
        const bike = await Bike.findOne({_id : req.body.bike})
        console.log(req.body.bike)
        bike.bookSlots.push(req.body.bookedTimeSlots)

        await bike.save()
        res.send('Your booking is successfull')
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }

});

module.exports = router