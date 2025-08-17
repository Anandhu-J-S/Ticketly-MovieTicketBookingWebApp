import { createTheaterSchema } from "../../Models/theaterModel.js";

export const banTheater = async(req,res)=>{
   try{
     const {theaterId} = req.params;

    await createTheaterSchema.findByIdAndUpdate(theaterId,{status:"banned"});

    res.status(200)
    .json({message:`Theater ${theaterId} banned !!`})
   }
   catch(err){
    console.log(err,"Error banning the theater !!")
   }
}



export const unbanTheater = async(req,res)=>{
    try{
        const {theaterId} = req.params;

    await createTheaterSchema.findByIdAndUpdate(theaterId,{status: "active"})

    res.status(200)
    .json({message:`Theater ${theaterId} unbanned !!`})
    }
    catch(err){
        console.log(err,"Error unbanning the theater !!")
    }
}