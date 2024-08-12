import mongoose from "mongoose";
import { boolean, date, string } from "zod";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // The user can Sign Up with other providers, rather than Credentials, at that time,they can't provide password, so, the other mandatory credentials are retrieved from thre provider, E.g., if user signs up using Google, the email is retrieved of the Google, since they are signing up using Social Sign on, the password, wont be required, if required is explicitly mentioned, then it may throw an error.
    password: { type: String, required: false, select: false },
    email: { type: String, required: true },
    dob: { type: String, required: false },
    isAdmin: { type: Boolean, required: true, default: false },
    teamId: { type: String, required: false },
    gameStats: { type: String, required: true, default: 'null' },
    googleId: { type: String, required: false },
    githubId: { type: String, required: false },
    avatar: { type: String, required: false },
    credentialsLogin: { type: Boolean, required: true, default: false }
}, { timestamps: true })

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
