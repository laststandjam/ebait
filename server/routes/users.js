const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");
const dotenv = require('dotenv').config()

//validation
const registerSchema = Joi.object({
  name: Joi.string()
    .min(6)
    .required(),
  userName: Joi.string()
    .min(6)
    .required(),
  email: Joi.string()
    .min(6)
    .required()
    .email(),
  password: Joi.string()
    .min(6)
    .required()
});
const loginSchema = Joi.object({
  email: Joi.string().required,
  password: Joi.string().required
});

router.post("/register", async (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    userName: req.body.userName,
    password: hashPassword
  });
  try {
    const savedUser = await newUser.save();
    res.send({  savedUser });
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/login", async (req, res, next) => {

  const { error } = loginSchema.validate;
  if (error){ 
    res.status(400).send(error.details[0].message)}
  const user = await User.findOne({ email: req.body.email });
  if (!user){  
    return req, res.status(400).send("email does not exists")}
  
    const validPass = await bcrypt.compare(req.body.password, user.password)
  if(!validPass)return res.status(400).send('password is incorrect')
  
  const payload = {subject: user.i}
  const token = jwt.sign(payload, dotenv.parsed.TOKEN_SECRET)
   res.status(200).send({token})
 
});
router.get("/profile", (req, res, next) => {
  res.send("PROFILE");

});


module.exports = router;
