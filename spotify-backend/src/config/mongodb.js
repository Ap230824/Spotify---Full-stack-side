
import mongoose from "mongoose";

const connectDB =async () => {
    mongoose.connection.on('connected' , () => {
        console.log("connection established at port 4000  ")
    });

    await mongoose.connect(`${process.env.MONGODB_URL}`)
}

export default connectDB;
