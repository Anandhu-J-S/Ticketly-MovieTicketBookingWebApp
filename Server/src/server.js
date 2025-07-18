import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()




app.listen(process.env.PORT,()=>{
        console.log(`Server listening on port ${process.env.PORT}`)
})


// inside .env
// .env
// node_modules/
// PORT = 8080