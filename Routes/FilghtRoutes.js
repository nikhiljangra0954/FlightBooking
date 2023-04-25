// here we will create Flight Routes like add a flight find a flight etc

const express = require("express");
const { flightModel } = require("../Model/flightModel");
// now we need flight Model as well
const flightRouter = express.Router();

// we can Fetch all the Flight that are present in the database using this Route
flightRouter.get("/flight", async (req, res) => {
  // res.send("Welcome to the flight Route")
  // now just Fetch all the data present in the data base of flights
  try {
    const flights = await flightModel.find();
    res.send(flights);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// Now lets add a new Flight to the database

flightRouter.post("/flights", async (req, res) => {
  // get the flight details from the body
  const {
    airline,
    flightNo,
    departure,
    arrival,
    departureTime,
    arrivalTime,
    seats,
    price,
  } = req.body;
  // Now we got the all details of the flight and send them to the database
  try {
    const flightdetails = new flightModel({
      airline,
      flightNo,
      departure,
      arrival,
      departureTime,
      arrivalTime,
      seats,
      price,
    });
    await flightdetails.save();
    res.send("Flight Details successfully added");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// Now get the details of the flight using only the id in params

flightRouter.get("/flights/:id", async (req, res) => {
  const id = req.params.id;
  // res.send(id)
  try {
    const flight = await flightModel.findById({ _id: id });
    console.log(flight);
    res.send(flight);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// Now lets use put and patch methods to change the details of the flight
flightRouter.patch("/flights/:id", async (req, res) => {
  let id = req.params.id;
  let payload = req.body;
  try {
    // now find by id and update the data
    let filght = await flightModel.findByIdAndUpdate({ _id: id }, payload);
    res.send("Flight details updated");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// Now lets delete the Flight data as well using the id
flightRouter.delete("/flights/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let flight = await flightModel.findByIdAndDelete({ _id: id });
    res.send("Flight details deleted Successfully");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

module.exports = {
  flightRouter,
};
