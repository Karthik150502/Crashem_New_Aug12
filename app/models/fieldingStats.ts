import mongoose from "mongoose";
import { boolean, date, string } from "zod";

const fieldingStatsSchema = new mongoose.Schema({
    user: { type: String, required: true },
    gameStats: { type: String, required: true, default: "null" }
}, { timestamps: true })

export const FieldingStatsSchema = mongoose.models?.FieldingStats || mongoose.model("FieldingStats", fieldingStatsSchema);
