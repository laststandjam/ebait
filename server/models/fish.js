const mongoose = require('mongoose')

const FishSchema = mongoose.Schema({
  speices: { type: String },
  location: { type: String },
  strain: { type: String },
  sex: { type: Boolean },
  size: { type: Number },
  price: { type: Number }
})

const Fish=module.exports = mongoose.model("Fish", FishSchema)
