import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
const app =express()
app.use(bodyParser.json());
 dotenv.config();
const PORT=process.env.PORT||5000;
const MONGOURL=process.env.MONGO_URL;
mongoose.connect(MONGOURL).then(()=>{
    console.log("Database Connected Succesfully")
    app.listen(PORT,()=>{console.log(`sever is running on port http://localhost:${PORT}`);
  })
})
.catch((error)=>console.log(error));
app.use("/api/user",route);
//Theodore 
