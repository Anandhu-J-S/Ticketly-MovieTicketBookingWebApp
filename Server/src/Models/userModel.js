import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["admin", "user", "theater"] }
}, {
    timestamps: true
})

export const createUserModel = mongoose.model("user", userSchema)