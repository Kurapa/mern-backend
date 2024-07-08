const mongoose=require("mongoose");
const info = new mongoose.Schema({
    "name":{type:String},
    "Email":{type:String},
    "regno":{type:String},
    "password":{type:String},
    "address":{type:String},
    "gender":{type:String},
    "language":{type:String},
    "state":{type:String},
    "id":{type:Number}
    },{
    collection:"facultyinfo.db"
    })

const marks=new mongoose.Schema({
    "id":{type:Number},
    "sname":{type:String},
    "marks":{type:String}
},{
    collection:"facultymarks.db"
})

const time=new mongoose.Schema({
    "id":{type:Number},
    "title":{type:String},
    "code":{type:String},
    "room":{type:String},
    "timings":{type:String},
},{
    collection:"facultytimetable.db"
})

const facultyinfo=mongoose.model("facultyinfo",info)
const facultymarks=mongoose.model("facultymarks",marks)
const facultytime=mongoose.model("facultytime",time)

module.exports={facultyinfo,facultymarks,facultytime}
