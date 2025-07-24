import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema({
    image:{String, required:true},
    theaterName : {type:String , unique:true , required:true},
    email:{type:String, unique:true, required:true},
    address:{type:String, unique:true}, required:true,
    location:{type:String},
    contact:{type:Number , unique:true, required:true},
    openingHours:{
        start:{type:String, required:true},
        end:{type:String, required:true}
    },
    numberOfscreens:{type:Number, required:true, min:1}
},
{
    timestamps:true
})

export const createTheaterSchema = mongoose.model("theater",theaterSchema)