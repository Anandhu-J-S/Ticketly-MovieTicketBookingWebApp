import express from 'express'
const app = express()
import dotenv from 'dotenv'
import { dbConnect } from './ConfigDB/dbConnect.js'
import { router } from './Routers/authRoutes.js'
dotenv.config()

dbConnect()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api",router)

app.listen(process.env.PORT,()=>{
        console.log(`✅ Server listening on port ${process.env.PORT}`)
})



