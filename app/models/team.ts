import mongoose from "mongoose";


const teamSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    numberOfMembers: { type: Number, required: true, default: 1 },
}, { timestamps: true })

export const Team = mongoose.models?.Team || mongoose.model("Team", teamSchema);
