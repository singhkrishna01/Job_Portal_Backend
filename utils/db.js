import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// console.log(process.env.MONGO_URI);
const url = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(url, {});
        console.log('mongodb connected successfull');
    } catch (error) {
        console.error(error);
        console.log("cant connect");
    }
}
export default connectDB;