import mongoose from "mongoose";

const adminSeedModel = new mongoose.Schema({
    adminName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    }
},
    {
        timestamps: true
    })

export const createAdminSeedModel = mongoose.model("adminseed", adminSeedModel)