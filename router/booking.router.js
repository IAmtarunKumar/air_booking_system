const express = require("express")
const {BookingModel} = require("../model/booking.model")
const { UserModel } = require("../model/user.model")
const { FlightModel } = require("../model/flight.model")
const bookingRouter = express.Router()


//show fligth or user details
bookingRouter.get("/api/dashboard" , async(req,res)=>{

    try {
        let data = await BookingModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }

  
})

//book flight


bookingRouter.post("/api/booking" , async(req,res)=>{
    let {user,flight} = req.body
    try {
 

let userDetail = await UserModel.findOne({_id : user})
let flightDetail = await FlightModel.findOne({_id : flight})

// console.log(flightDetail,userDetail)

let payload = {}
payload.user = userDetail
payload.flight = flightDetail

console.log(payload)

      let booking = new BookingModel(payload)
       await booking.save()

 res.status(201).send({msg : "Your flight is booked"})
    } catch (error) {
        res.status(400).send(error)
    }

  
})

module.exports={
    bookingRouter
}