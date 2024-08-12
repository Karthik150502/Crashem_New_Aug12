import mongoose from "mongoose";
import { boolean, date, string } from "zod";

const battingStatsSchema = new mongoose.Schema({
    user: { type: String, required: true },
    gameStats: { type: String, required: true, default: "null" }
}, { timestamps: true })

export const BattingStatsSchema = mongoose.models?.BattingStats || mongoose.model("BattingStats", battingStatsSchema);
