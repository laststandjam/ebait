const express = require('express'
)
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const  User = require('../models/user')

router.post('/register', async(req,res, next)=>{
    let  newUser = new User({
        name:req.body.name,
        email:req.body.email,
        userName: req.body.userName,
       password: req.body.password
    });
  try{
      const savedUser=await newUser.save()
      res.send(savedUser)
  }catch(err){
      res.status(400).send(err)
  }
})
router.post('/authenticate', (req,res, next)=>{
    res.send('AUTHENTICATE')
})
router.get('/profile', (req,res, next)=>{
    res.send('PROFILE')
})



module.exports = router