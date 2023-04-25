// here we will connect our database mongobd atlas
// here we will ise dotenv file to get the mondodb url

const mongoose = require('mongoose')
require("dotenv").config()

// now create a connection
const connection = mongoose.connect(process.env.mongourl)

// Now lets export this connection

module.exports ={
    connection
}