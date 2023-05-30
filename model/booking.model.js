const mongoose = require("mongoose")

//schema 
const bookingSchema = mongoose.Schema({

        user : { type: String, ref: 'users' },
        flight : { type: String, ref: 'flights' }
   
})


//model

const BookingModel = mongoose.model("Booking" , bookingSchema)

module.exports={
    BookingModel
}