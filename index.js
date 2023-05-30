const express = require("express")
require("dotenv").config()
const {userRouter} = require("./router/user.router")
const {connection} = require("./config/db")
const { flightRouter } = require("./router/flight.router")
// const {BookingModel} = require("./model/booking.model")
const { bookingRouter } = require("./router/booking.router")
const app = express()  //call express
app.use(express.json())  //json parsar




//user router
app.use("/" , userRouter)
//flight router
app.use("/",flightRouter)

//booking router
app.use("/", bookingRouter)


app.listen(process.env.port || 5000 , async()=>{
    await connection
    console.log("MongoDB is connected")

    console.log(`${process.env.port} is working`)
})