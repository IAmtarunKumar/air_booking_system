const mongoose = require("mongoose")

//schema 
const flightSchema = mongoose.Schema({

    airline :String,
    flightNo : String,
    departure : String,
    arrival : String,
    departureTime : Date,
    arrivalTime : Date,
    seats : Number,
    price : Number
})


//model

const FlightModel = mongoose.model("flight" , flightSchema)

module.exports={
    FlightModel
}