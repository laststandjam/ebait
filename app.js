const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database')
const dotenv = require('dotenv').config()
//Routes
const users = require('./routes/users')
 
//Connect to Db
mongoose.connect(dotenv.parsed.DB_Connect,{useNewUrlParser:true}, ()=>(console.log('connected to db'))
 )
const app = express();
const port = 3000;

//middleware
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/src')))
app.use(bodyParser.json())


app.use('/users', users)

app.get("/", (req, res) => res.send("Invalid Endpoint"));

app.listen(port, () => {
  console.log("server started on port " + port);
});
