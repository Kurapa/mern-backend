let express=require("express");
const mongoose=require("mongoose");

let cors=require("cors")
let router=require("./controller/student")
let studentrouter=require("./controller/studentdetails")
let facultyrouter=require("./controller/faculty")
let app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use("/route",router)
app.use("/content",studentrouter)
app.use("/faculty-route",facultyrouter)

const url="mongodb+srv://kurapatignaneswar05:2005@cluster0.4kmtx1r.mongodb.net/college"
mongoose.set("strictQuery",true);
const db=async ()=>{
    try {
        await mongoose.connect(url);
        console.log("connected");
    } catch (err) {
        console.log(err);
    }
}

app.listen(5000,async ()=>{
try{
    await db()
    console.log("port is running")
}
catch(err){
    console.log(err);
}
})