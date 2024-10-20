import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import apiRoutes from "./Routes/apiRoutes.js"
dotenv.config(); 
const app=express();
app.use(express.json());
app.use(cors());
app.use("",apiRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`backend working ${process.env.PORT}`);
})