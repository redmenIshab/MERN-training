import {createServer} from 'node:http';
import express from 'express';
import productRoutes from './productRoutes.js';
import mongoose from 'mongoose';
import 'dotenv/config';

const mongoURI = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@mern-mmamc.iobwd2h.mongodb.net/`;

(async()=>{
    try{
        await mongoose.connect(mongoURI)
        console.log("MongoDB connected successfully")
    }catch(error){
        console.error("Error connecting to MongoDB:", error)
    }
})();

const app = express();
app.use(express.json());

let publicAccess = true;
app.get('/',(req,res, next)=>{ 

    if(publicAccess){
        //token, user authorized, db logic, role ??
        next()
    }else res.send("Hello from Express server")

},(_,res,__)=>{
    
    res.send("Public Access is enabled")
})


app.get("/about",(req,res,next)=>{
    res.send("About page from Express server")
})

app.use("/products",productRoutes);


app.listen(8000,()=>{
    console.log("Express server is running on port 8000")
})
