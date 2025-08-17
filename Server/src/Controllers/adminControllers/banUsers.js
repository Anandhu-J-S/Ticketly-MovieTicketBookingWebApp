import { createUserModel } from "../../Models/userModel.js";

export const banUser = async(req,res)=>{
    try{
        const {userId} = req.params;

    const updatedUser = await createUserModel.findByIdAndUpdate(userId,{status:"banned"});

    if (!updatedUser) {
    return res.status(404).json({ message: "User not found." });
}

    res.status(200)
    .json({message:`User ${userId} banned !!`})
    }
    catch(err){
        console.log(err,"Error banning the user")
    }
}

export const unbanUser = async(req,res)=>{
    try{
        const {userId} = req.params;

    const updatedUser = await createUserModel.findByIdAndUpdate(userId,{status:"active"});

    if (!updatedUser) {
    return res.status(404).json({ message: "User not found." });
}

    res.status(200)
    .json({message:`User ${userId} unbanned !!`})
    }
    catch(err){
        console.log(err,"Error unbanning the user")
    }
}

