// here we will create all booking Routes for the users

const express = require('express');
const { bookingModel } = require('../Model/bookingModel');
const bookingRoute = express.Router()


bookingRoute.get("/dashboard" , async (req, res) => {
    // here we have to get all the details from the booking data base
    try {
        let bookingdetails = await bookingModel.find()
        res.send(bookingdetails)
    } catch (error) {
        console.log(error)
        res.send(error.message || error)
    }
})
// Now lets book the  flight

bookingRoute.post("/booking", async (req, res) => {
    let payload = req.body;
    try {
        let newbooking = await new bookingModel(payload)
        await newbooking.save()
        res.send("Flight booking done")
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})



module.exports ={
    bookingRoute
}