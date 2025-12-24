import express from 'express';
import cors from 'cors';
import {clerkMiddleware} from "@clerk/express";
import { serve } from "inngest/express";

//Local Imports
import {connectDB} from './lib/db.js';
import {inngest, functions} from "./lib/inngest.js";
import chatRoutes from './routes/chatRoutes.js';
import {ENV} from './lib/env.js';

const app = express();
app.use(express.json())
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}))

app.use(clerkMiddleware()); // This adds auth field to req objects: req.auth()

app.use("/api/inngest", serve({client: inngest, functions}))
app.use("/api/chat", chatRoutes);


app.get("/health", (req, res) => {
    res.status(200).json({message: "Server is Up and running!"})
})


//Connect to DB and start server
try {
    await connectDB();
    app.listen(ENV.PORT, () => {
        console.log(`Server is running on http://localhost:${ENV.PORT}`);
    });
} catch (err) {
    console.log("Error starting server: ", err);
    process.exit(1);
}