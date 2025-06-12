import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js";

const app=express();

dotenv.config({
    path:'./env'
})

connectDB();

/*
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR: ",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error:",error)
    }
})()
*/

