const express = require("express");
const {studentsdb} = require("../model/studentdb.js")
const mongoose = require("mongoose");


const router = express.Router();
//get
router.get("/", async (req,res)=>{
try {
    const data=await studentsdb.find({})
    res.status(200).json(data)
} catch (error) {
    res.status(500).json(error)
}
})

//login
router.post("/login",async (req,res)=>{
    try {
        const email=req.body.email
        const pwd=Number(req.body.password)
        console.log(email)
        console.log(pwd)

        const [data]= await studentsdb.find({password:pwd,schoolEmail:email})
        if(!data){
          return res.status(200).json({msg:"fail"})
        }
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)   
    }
})

//parent-login
router.post("/parent-login",async (req,res)=>{
    try {
        const email=req.body.email
        const regno=Number(req.body.regNo)

        const [data]= await studentsdb.find({regNo:regno,parentEmail:email})
        if(!data){
          return res.status(200).json({msg:"fail"})
        }
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)   
    }
})


//forgotpassword
router.put("/forgotpassword",async (req,res)=>{
    try {
        const dataregno=Number(req.body.regNo)
        console.log(dataregno)
         const data=await studentsdb.findOneAndUpdate({regNo:dataregno},req.body)
        if(!data){
            return res.status(200).json({msg:"no data with id"})
           }
        res.status(200).json({msg:"success"})
    } catch (error) {
        res.status(500).json(error)   
    }
})












module.exports = router;