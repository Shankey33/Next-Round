import dotenv from 'dotenv';


// This is for loading environment variables from a .env file to anywhere by just importing this file 

dotenv.config({quiet: true}); //quiet to remove dotenv variable count message at every start, its annoying.


export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV
}