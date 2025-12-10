import express from 'express';
import cors from 'cors';
import path from 'path';
import {ENV} from './lib/env.js';
import {connectDB} from './lib/db.js';
import {inngest, functions} from "./lib/inngest.js";
import { serve } from "inngest/express";

const app = express();

const __dirname = path.resolve();


//Middlewares
app.use(express.json())
//credentials: true means we are allowing browser to send cookies in the request
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}))

app.use("/api/inngest", serve({client: inngest, functions}))


app.get("/health", (req, res) => {
    res.status(200).json({message: "Server is Up and running!"})
})

if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })

}

const startServer = async () => {
    try{
        if(!ENV.PORT){
            throw new Error("PORT is not defined in environment variables");
        }
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`Server started on  http://localhost:${ENV.PORT}`);
        })
    } catch(err){
        console.error(`Error starting server: ${err.message}`);
    }
}

startServer();







//lib for 3rd party services.
