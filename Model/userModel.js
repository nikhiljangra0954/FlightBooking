// here we will create User model using the mongoose and the schema as well

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email : String,
    password : String
},{
    versionKey : false
})

// now creat the user model

const userModel = mongoose.model("User",userSchema)

// Now export the model

module.exports ={
    userModel
}