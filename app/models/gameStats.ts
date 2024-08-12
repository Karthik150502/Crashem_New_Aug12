import mongoose from "mongoose";
import { boolean, date, string } from "zod";


const gameStatsSchema = new mongoose.Schema({
    user: { type: String, required: true },
    numberOfMatches: { type: Number, required: true, default: 0 },
    bowlingStats: { type: String, required: true },
    battingStats: { type: String, required: true },
    fieldingStats: { type: String, required: true },
}, { timestamps: true })

export const GameStatsSchema = mongoose.models?.GameStats || mongoose.model("GameStats", gameStatsSchema);
