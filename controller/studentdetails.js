const express = require("express");
const {studentinfo,studentmarks,studentpay,studenttime} = require("../model/studentdb.js")
const mongoose = require("mongoose");

const router=express.Router()

router.get("/info/:id",async(req,res)=>{
    try {
        const sid=Number(req.params.id)
        const  [info]=await studentinfo.find({id:sid})
        res.status(200).json(info)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/pay/:id",async(req,res)=>{
    try {
        const sid=Number(req.params.id)
        const info=await studentpay.find({id:sid})
        res.status(200).json(info)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/marks/:id",async(req,res)=>{
    try {
        const sid=Number(req.params.id)
        const [info]=await studentmarks.find({id:sid})
        res.status(200).json(info)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/time/:id",async(req,res)=>{
    try {
        const sid=Number(req.params.id)
        const info=await studenttime.find({id:sid})
        res.status(200).json(info)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router