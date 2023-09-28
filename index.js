const express =require("express");
const app =express();
const mongoose=require("mongoose");
const path =require("path")
const Chat=require("./models/chat.js")
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")
main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}
app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    console.log(chats);
    
    res.render("index.ejs",{chats})


})
let chat1=new Chat({
    from:"neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at:new Date()
})
chat1.save().then((res)=>{
    console.log(res);
})

app.get("/",(req,res)=>{
    res.send("root is working")
})
app.listen(1211,()=>{
    console.log("server is listening on port 1212");
})
