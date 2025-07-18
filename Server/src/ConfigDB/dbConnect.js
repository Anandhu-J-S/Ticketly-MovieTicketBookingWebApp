import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const db = process.env.MONGO_URL

export const dbConnect = () => {
    try {
        mongoose.connect(db)
        console.log('DB Connected successfully')
    }
    catch(err){
        console.log("DB connection failed",err)
    }
}