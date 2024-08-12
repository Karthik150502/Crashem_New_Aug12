'use server'
import { connectDb } from "./utils"
import { User } from "../models/user"
import { hash } from 'bcryptjs'
import { SignUpUser } from "./definitions"
import { signIn } from "next-auth/react"
import { compare } from "bcryptjs"


export const handleNewUser = async ({ name, email, password }: SignUpUser) => {


    connectDb()
    const alreadyUser = await User.findOne({ email })

    if (alreadyUser) {
        return {
            status: 201,
            message: "User already exists, try another email."
        }
    }


    const pwdHashed: string = await hash(password, 10)
    const newuser = await User.create({
        name, email, password: pwdHashed, credentialsLogin: true
    })

    return {
        user: newuser,
        status: 200,
        message: "User created successfully."
    }
}



interface UserLoginOp {
    status: number,
    message: string
}

export const loginUser = async ({ email, password }: { email: string, password: string }) => {

    try {
        connectDb();
    } catch (error) {
        return {
            status: 500,
            message: "Cannot connect to the Databse, kindly try again later."
        }
    }


    const user = await User.findOne({ email });
    if (!user) {
        return {
            status: 400,
            message: "Invalid credentials, user not found, try different email."
        }
    }

    const match = await compare(password, user.password)

    if (!match) {
        return {
            status: 400,
            message: "Invalid password."
        }
    }


    try {
        const res = await signIn('credentials', { email, password, redirect: false });
    } catch (error) {
        return {
            status: 500,
            message: "There is a technical error from our side, kindly cooperate and try after some time."
        }
    }
}



