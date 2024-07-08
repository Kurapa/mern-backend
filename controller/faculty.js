const express = require("express");
const mongoose = require("mongoose");
const {facultyinfo, facultytime, facultymarks} = require("../model/facultydb")


const router = express.Router();


//get

router.get("/",async (req,res)=>{
    try {
        const data=await facultyinfo.find({})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})
//login

router.post("/login",async (req,res)=>{
    try {
        const email=req.body.email
        const pwd=req.body.password
        console.log(email)
        console.log(pwd)

        const [data]= await facultyinfo.find({password:pwd,Email:email})
        if(!data){
          return res.status(200).json({msg:"fail"})
        }
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)   
    }
})

//get with id

router.get("/info/:id",async (req,res)=>{
    try {
        const fid=Number(req.params.id)
        const  [info]=await facultyinfo.find({id:fid})
        res.status(200).json(info)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//timetable
router.get("/time/:id",async (req,res)=>{
    try {
        const fid=Number(req.params.id)
        const info=await facultytime.find({id:fid})
        res.status(200).json(info)
        
    } catch (error) {
        res.status(500).json(error)
    }
})


//marks
router.get("/marks/:id",async (req,res)=>{
    try {
        const fid=Number(req.params.id)
        const info=await facultymarks.find({id:fid})
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json(error)
    }
})

//create marks upload
router.post("/marks-upload/:id",async (req,res)=>{
    try {
        const fid=Number(req.params.id)
        const uploadedMarks=req.body
        const newdata={...uploadedMarks,id:fid}
        const info= await facultymarks.create(newdata)
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete 
router.delete("/marks-delete/:id/:sname/:marks",async (req,res)=>{
    try {
       const fid=req.params.id
       const name=req.params.sname
       const smarks=req.params.marks
       const info=await facultymarks.findOneAndDelete({id:fid,sname:name,marks:smarks})
       res.status(200).json({msg:"success"})
    } catch (error) {
      res.status(500).json(error)   
    }
})

//forgotpassword
router.put("/forgotpassword",async (req,res)=>{
    try {
        const dataregno=req.body.regno
         const data=await facultyinfo.findOneAndUpdate({regno:dataregno},req.body)
        if(!data){
            return res.status(200).json({msg:"no data with id"})
           }
        res.status(200).json({msg:"success"})
    } catch (error) {
        res.status(500).json(error)   
    }
})


module.exports=router