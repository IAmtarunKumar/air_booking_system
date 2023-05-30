const express = require("express")
const {UserModel} = require("../model/user.model")


const userRouter = express.Router()

userRouter.post("/api/register" , async(req,res)=>{
    try {
        let {name,email,password} = req.body

        let data = await UserModel.find({email})
      
        if(data.length>0){
            res.send({msg : "Email_ID is already register Please go to login"})
        }else{


        let user = new UserModel({name,email,password})
        await user.save()
    
        res.status(201).send({msg : "User register succsefully"})
        }
    } catch (error) {
        res.status(400).send(error)

    }
 
})


userRouter.post("/api/login" , async(req,res)=>{
    try {

        let {email,password} = req.body
       let data = await UserModel.find({email,password})
       if(data.length>0){
        res.status(201).send({msg : "User login succsefully"})
       }else{
        res.status(400).send("something went wrong")
       }
    } catch (error) {
        res.status(400).send(error)

    }
 
})


module.exports={
    userRouter
}