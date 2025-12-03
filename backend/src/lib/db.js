import mongoose from "mongoose";
import {ENV} from "./env.js";
export const connectDB = async () => {
    try{
        const connect = await mongoose.connect(ENV.DB_URL)
        console.log(`Connection to DB Successful: ${connect.connection.host}`);
    } catch(err){
        console.error(`Error connecting to DB: ${err.message}`);
        
        //0 - Success | 1 - Failure
        process.exit(1);
    }
}