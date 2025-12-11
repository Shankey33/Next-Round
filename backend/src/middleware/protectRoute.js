import { requireAuth } from "@clerk/express";
import User from "../model/User.js";

export const protectRoute = [
    requireAuth({ signInUrl: "/sign-in" }),
    async (req, res, next) => {
        try {
            const clerkId = req.auth?.userId;
            if (!crerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

            // Find the user in the database by Clerk user id
            const user = await User.findOne({ clerkId });
            if (!user) return res.status(404).json({ message: "Unauthorized - user not found" });

            req.user = user; // attach hydrated user to downstream handlers
            next();
        } catch (error) {
            console.error("Error in Protect Route middleware:", error);
            res.status(500).json({ message: "Server Error" });
        }
    },
];