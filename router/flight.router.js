const express = require("express")
const {FlightModel} = require("../model/flight.model")


const flightRouter = express.Router()

//get all flight
flightRouter.get("/api/flights" , async(req,res)=>{
    try {

      let data = await FlightModel.find()
      res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)

    }
 
})


//flight find by id
flightRouter.get("/api/flights/:id" , async(req,res)=>{
    try {
        let id = req.params.id
      let data = await FlightModel.find({_id: id})
      res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)

    }
 
})


//post new flight
flightRouter.post("/api/flights" , async(req,res)=>{
    try {
        let payload = req.body

        let data = await FlightModel.find({flightNo : payload.flightNo})
      
        if(data.length>0){
            res.send({msg : "flightNo is already registered"})
        }else{


        let flight = new FlightModel(payload)
        await flight.save()
    
        res.status(201).send({msg : "flight register succsefully"})
        }
    } catch (error) {
        res.status(400).send(error)

    }
 
})


//patch put
//update flight details

flightRouter.patch("/api/flights/:id" , async(req,res)=>{
    try {
        let payload = req.body
        let id = req.params.id
        // console.log(id)

      let data =   await FlightModel.findByIdAndUpdate({_id:id} , payload)

        res.status(200).send({msg : "Flight details is updated"})
   
        
    } catch (error) {
        res.status(400).send(error)

    }
 
})


//delete
//delete flight details 
flightRouter.delete("/api/flights/:id" , async(req,res)=>{
    try {
    
        let id = req.params.id

        await FlightModel.findByIdAndDelete({_id:id} )

        res.status(202).send({msg : "Flight details is deleted"})
   
        
    } catch (error) {
        res.status(400).send(error)
    }
 
})



module.exports={
    flightRouter
}