import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    profilePic: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["admin", "user", "theater"] },
    isActive:{
        type:String,
        required:true,
        default:"pending"
    }
}, {
    timestamps: true
})

export const createUserModel = mongoose.model("user", userSchema)  
