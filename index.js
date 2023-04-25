// Here we will first run our server usind express

const express = require("express");
require("dotenv").config();
// connection for connecting to the database
const { connection } = require("./Config/db");
const { UserRouter } = require("./Routes/UserRoutes");
const { flightRouter } = require("./Routes/FilghtRoutes");
const { bookingRoute } = require("./Routes/bookingRoutes");
const app = express();
app.use(express.json());
app.use("/api", UserRouter);
app.use("/api", flightRouter);
app.use("/api", bookingRoute);
app.get("/", async (req, res) => {
  res.send("Airline welcome Page!!");
});

app.listen(process.env.port, async (req, res) => {
  try {
    await connection;
    console.log("Connected to the database mongodb atlas");
    console.log("Listening on " + process.env.port);
  } catch (error) {
    console.log(error);
  }
});
