import React from 'react'
import { Metadata } from "next";
import SignInForm from '@/app/(components)/signinForm/form'
import "./styles.css"
export const metadata: Metadata = {
    title: {
        template: "SignIn",
        default: "SignIn"
    },
    description: 'Crashem - A Community for the Gully Cricketers',
};
export default function page() {



    return (
        <div className="w-96 h-auto rounded-xl flex flex-col items-center justify-center mx-auto mt-4">
            <SignInForm />
            <section className='mt-2 flex flex-row items-center justify-center w-full h-auto text-xs text-right text-white'>
                <span>Haven't already registered?</span><span className='hyper'>&nbsp;<a className='text-cyan-200 ' href="/signup">register</a></span>
            </section>
        </div>
    )
}
