// here we will create flight model using the mongoose and the schema as well

const mongoose = require('mongoose')

const flightSchema = mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
},{
    versionKey : false
})

// now creat the flight model

const flightModel = mongoose.model("Flight",flightSchema)

// Now export the model

module.exports ={
    flightModel
}