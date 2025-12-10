import {StreamChat} from "stream-chat";
import {ENV} from "./env.js";


const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiKey || !apiSecret) console.log("STREAM_API_KEY and/or STREAM_API_SECRET is/are missing");

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async(userData) => {
    try{
        await chatClient.upsertUser(userData);
        console.log("Stream user upserted successfully!")
    } catch(err){
        console.log("Error setting up user for stream chat client!, ", err)
    }
}

export const deleteStreamUser = async(userId) => {
    try{
        await chatClient.deleteUser(userId);
        console.log("Stream User deleted successfully!");
    } catch(err){
        console.log("Error deleting user for stream chat service!, ", err)
    }
}