const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://Miguel:Kudy%402003@cluster0.v0d6j.mongodb.net/go-bikefy', {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=> {
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=> {
        console.log('Mongo DB Connection Error')
    })
}

connectDB()

module.exports = mongoose