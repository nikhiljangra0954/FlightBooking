// here we will create booking model using the mongoose and the schema as well

const mongoose = require('mongoose')
const { userModel } = require('./userModel')
const { flightModel } = require('./flightModel')
const bookingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    flight : { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' }
},{
    versionKey : false
})

// now creat the booking model

const bookingModel = mongoose.model("Booking",bookingSchema)

// Now export the model

module.exports ={
    bookingModel
}