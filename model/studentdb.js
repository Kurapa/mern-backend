 const mongoose=require("mongoose");
  const studentSchema = new mongoose.Schema({
    "name":{type:String},
    "schoolEmail":{type:String},
    "regNo":{type:Number},
    "parentEmail":{type:String},
    "password":{type:Number},
    "id":{type:Number}
    },{
    collection:"studentsdb"
    })


 const info= new mongoose.Schema({
   "gender":{type:String},
   "dob":{type:String},
   "bloodgroup":{type:String},
   "nativelanguage":{type:String},
   "nationality":{type:String},
   "religion":{type:String},
   "address":{type:String},
    "mobile":{type:String},
    "parentmobile":{type:String},
    "id":{type:Number}
 },{
    collection:"studentinfo.db"
 })

 const pay=new mongoose.Schema({
    "refno":{type:String},
    "amount":{type:String},
    "date":{type:String},
    "id":{type:Number}
    
 },{
    collection:"studentpayment.db"
 })

 const marks=new mongoose.Schema({
    "html":{type:String},
    "css":{type:String},
    "js":{type:String},
    "id":{type:Number}

 },{
    collection:"studentmarks.db"
 })

 const time=new mongoose.Schema({
    "title":{type:String},
    "code":{type:String},
    "room":{type:String},
    "timings":{type:String},
    "facultyname":{type:String},
    "id":{type:Number}
 },{
    collection:"studenttimetable.db"
 })
const studentsdb=mongoose.model("studentsdb",studentSchema)
const studentinfo=mongoose.model("studentsinfo",info)
const studentpay=mongoose.model("studentpay",pay)
const studenttime=mongoose.model("studenttime",time)
const studentmarks=mongoose.model("studentmarks",marks)

module.exports={studentsdb,studentinfo,studentpay,studentmarks,studenttime};

