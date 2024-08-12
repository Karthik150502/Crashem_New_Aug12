import React from 'react'
import SignUpForm from '@/app/(components)/signup/form'
import "./styles.css"
export default function page() {
    return (
        <div className="w-96 h-auto flex flex-col items-center justify-center mx-auto mt-4 overflow-hidden">
            <SignUpForm />
            <section className='mt-2 flex flex-row items-center justify-center w-full h-auto text-xs text-right text-white'>
                <span>Already registered? </span><span className='hyper'>&nbsp;<a className='text-cyan-200 ' href="/signin">Sign in</a></span>
            </section>
        </div>
    )
}
