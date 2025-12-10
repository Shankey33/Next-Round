import dotenv from 'dotenv';


// This is for loading environment variables from a .env file to anywhere by just importing this file 

dotenv.config({quiet: true}); //quiet to remove dotenv variable count message at every start, its annoying.


export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_URL: process.env.CLIENT_URL,
    STREAM_API_SECRET: process.env.STREAM_API_SECRET,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
    INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
}