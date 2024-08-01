import { v2 as cloudinary } from 'cloudinary'


const connectCloudinary = async () => {
    console.log("cloudinary is succesfully connectd");

    await cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret_key: process.env.CLOUDINARY_API_SECRET_KEY
    });
}

export default connectCloudinary;
