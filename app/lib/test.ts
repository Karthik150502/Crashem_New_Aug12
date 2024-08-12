import { createUntrackedSearchParams } from "next/dist/client/components/search-params";
import { User } from "../models/user"
import { connectDb } from "./utils"




export const testFunc = async (id: string) => {


    try {
        connectDb();
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            message: "There was some technical error, please try again later...",
            error
        }
    }


    try {
        const user = await User.findById(id)
        if (!user) {
            return {
                status: 201,
                message: "User not found..",
            }
        }
        return user;
    } catch (error) {
        return {
            status: 500,
            message: "There was some technical error, please try again later...",
            error
        }
    }




}