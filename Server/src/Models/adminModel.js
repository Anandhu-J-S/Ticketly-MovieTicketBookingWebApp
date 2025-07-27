import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    profilePic:{type:String , required:true},
    adminName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, required:true,enum:["user","theater","admin"] }
},{
timestamps:true
})


export const createAdminModel = mongoose.model("admin",adminSchema)