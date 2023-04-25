// here we will create all Users Routes like register and  Login
const express = require("express");
// we need to require the bcyript
const bcrypt = require("bcrypt");
const UserRouter = express.Router();
const jwt = require("jsonwebtoken");
const { userModel } = require("..//Model/userModel");
// userroute is working fine now we will create a register and login routes for use
// UserRouter.get("/register" , async (req, res) => {
//     const {name}  = req.body
//     res.send(name+"This is User Router")
// })

UserRouter.post("/register", async (req, res) => {
  // get all details from the body
  const { name, email, password } = req.body;
  // res.send(`${name}`)
  try {


    // first find the user in the data base if his data is there or not
    let userdata = await userModel.find({email})
    if(userdata.email == email){
      res.send("User already registered Please Log in")
    }
    // we need userModel
    // also change the password to hashpassword

    bcrypt.hash(password, 3, async (err, newpass) => {
      // Store hash in your password DB.
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        // save the user to the database
        const user = new userModel({ name, email, password: newpass });
        await user.save();
        // user saved to our database
        res.send(`${name}'s Registration successful`).statusCode(201);
      }
    });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// Now lets create a new login Routes for use to login

// usre can login with email and passowrd

UserRouter.post("/login", async (req, res) => {
  // get email and password
  const { email, password } = req.body;
  try {
    // find the user in the database using the email
    const user = await userModel.findOne({ email: email });
    const pass = user.password;
    // res.send(pass)
    // we got the haspassword
    bcrypt.compare(password, pass, async (err, result) => {
      // result == true
      if (err) {
        console.log(err);
        res.send("Your Password is Incorrect");
      } else {
        // we can generate the token as well
        // Or just login successfull
        // key here is nik
        const token = jwt.sign({ userID: user._id }, "nik");
        res.send({ msg: "Login successfull", token: token }).statusCode(201);
      }
    });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

module.exports = {
  UserRouter,
};
