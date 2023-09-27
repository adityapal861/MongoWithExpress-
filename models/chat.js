const mongoose=require("mongoose")
//Schema
const chatSchema=new mongoose.Schema({
    from:{
        type:String ,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50
    },
    created_at:{
        type:Date,
        required:true,
    }

})
//Model
const Chat=mongoose.model("Chat",chatSchema);
module.exports=Chat;  
