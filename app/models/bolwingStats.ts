import mongoose, { ObjectId } from "mongoose";
import { boolean, date, string } from "zod";

const bowlingStatsSchema = new mongoose.Schema({
    user: { type: String, required: true },
    gameStats: { type: String, required: true, default: "null" }
}, { timestamps: true })

export const BowlingStatsSchema = mongoose.models?.BowlingStats || mongoose.model("BowlingStats", bowlingStatsSchema);
