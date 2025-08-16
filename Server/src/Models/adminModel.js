import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    profilePic: {
        type: String,
        required: [true, "please add profilePic"]
    },
    adminName: {
        type: String,
        required: [true, "please add adminName"]
    },
    email: {
        type: String,
        required: [true, "please add email"]
    },
    password: {
        type: String,
        required: [true, "please add password"]
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "theater", "admin"]
    }
}, {
    timestamps: true
})


export const createAdminModel = mongoose.model("admin", adminSchema)