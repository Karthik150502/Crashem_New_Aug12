import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/app/lib/utils";
import { User } from "@/app/models/user";
import { compare } from "bcryptjs"


export async function POST(req: NextRequest) {

    try {
        const { email, password } = await req.json();
        await connectDb();

        const existingUser = await User.findOne({ email }).select("+password")

        if (!existingUser) {
            return NextResponse.json({ user: existingUser })
        } else {
            
        }
    }



} 