import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    profilePic: {
        type: String,

    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    contact: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "user", "theater"]
    },
    status: {
        type: String,
        enum: ["active", "banned", "pending", "approved", "rejected"],
        default: "pending"
    }

}, {
    timestamps: true
})

export const createUserModel = mongoose.model("user", userSchema)  
