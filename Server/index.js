import express from "express";
import connectDB from "./config/Database.js";
import userRoute from "./routes/User.js"
const app = express();

const port = 5000;
app.get("/",(req,res)=>{
    res.send("Server is created by Ashish Ranjan");
})
//connect to DB
connectDB();
app.use(express.json());
app.use("/api",userRoute);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})