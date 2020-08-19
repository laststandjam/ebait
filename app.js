const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database')
console.log(config.database)
mongoose.connect(config.database,{ useNewUrlParser: true } )
mongoose.connection.on('connected', ()=>(
    console.log('connected to database')
))

const app = express();

const users = require('./routes/users')
const port = 3000;

app.use(cors())
app.use(express.static(path.join(__dirname, 'client/src')))
app.use(bodyParser.json())

app.use('/users', users)

app.get("/", (req, res) => res.send("Invalid Endpoint"));

app.listen(port, () => {
  console.log("server started on port " + port);
});
