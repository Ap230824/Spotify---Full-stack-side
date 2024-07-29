import express from "express";
import cors from 'cors';
import 'dotenv/config';
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";

// app config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();



// middlewares
// express.json() are use to make text-based format to send and receive msg
app.use(express.json());
app.use(cors());


// initializing routes

app.use("/api/song", songRouter)


app.get('/', (req, res) => {
    res.send("API WORKING ON PORT 4000");
})


// listining the requset

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
})