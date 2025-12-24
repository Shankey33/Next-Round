import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

// Local Imports
import { ENV } from "./lib/env.js";
import { inngest, functions } from "./lib/inngest.js";
import { connectDB } from "./lib/db.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

const app = express();


app.use(express.json())
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}))
app.use(clerkMiddleware()); // This adds auth field to req objects: req.auth()


app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);


app.get("/health", (req, res) => {
    res.status(200).json({message: "Server is Up and running!"})
})


//Connect to DB and start server
connectDB()
.then(() => {
    console.log("Connected to Database");
    app.listen(ENV.PORT, () => {
        console.log(`Server is running on http://localhost:${ENV.PORT}`);
    });
})
.catch((err) => {
    console.error("Failed to connect to Database", err);
    process.exit(1); //Error exit
});