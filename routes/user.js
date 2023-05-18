const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

///register
userRouter.post("/register", registerRules(), validation, async (req, res) => {
  const { name, age, lastName, password , email } = req.body;
  try {
    const newUser = new User(req.body);
    //check if email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    // newUser.password = hashedPassword;
    // console.log(hashedPassword);
    newUser.password = hashedPassword;

    //save user
    const result = await newUser.save();
    //generate a token
    const payload = {
      _id: result._id,
      name: result.name,
    };
    require("dotenv").config()
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 1000 * 60 * 60 * 24,
    });
    //**********
    res.send({
      user: result,
      msg: "user is saved",
      token:`Bearer ${token}`
    });
  } catch (error) {
    res.send("can not save the user");
    console.log(error);
  }
});
//login
userRouter.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //fin of the user exist
    const searchedUser = await User.findOne({ email });
    //if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //password are
    const match = await bcrypt.compare(password, searchedUser.password);

    if (!match) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //cree un token
    const payload = {
      _id: searchedUser.id, 
      nam:searchedUser.name
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 1000 * 3600 * 24,
    });
    console.log(token);
    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "succdddddess", token:`Bearer ${token}` });
  } catch (error) {
    res
    .status(4010)
    .send({ msg: "can not get th user" });
  }
});

//get current user
userRouter.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

// ------------------- crud --------------------
//post user
userRouter.post("/add", async (req, res) => {
    try {
        let newUser = new User(req.body);
        let result = await newUser.save();
        res.send({user:result , msg:"user is added"})
    } catch (error) {
        console.log(error)
    }
})
//get all users
userRouter.get("/all", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ user: result, msg: "all users" });
  } catch (error) {
    console.log(error);
  }
});
//get user by id
userRouter.get("/get/:id", async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.send({ user: result, msg: "one user" });
  } catch (error) {
    console.log(error);
  }
});
//delete user
userRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.send({  msg: " user deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update user
userRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
    res.send({ msg: " user is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;