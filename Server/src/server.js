import express from 'express'
const app = express()
import cors from 'cors'; 
import dotenv from 'dotenv'
import { dbConnect } from './ConfigDB/dbConnect.js'
import { router } from './Routers/authRoutes.js'
import { theaterRouter } from './Routers/theaterRoutes.js';
import { seedAdmin } from './seed/seedAdmin.js';
dotenv.config()

dbConnect()
seedAdmin()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api",router)
app.use("/api",theaterRouter)

app.listen(process.env.PORT,()=>{
        console.log(`✅ Server listening on port ${process.env.PORT}`)
})



