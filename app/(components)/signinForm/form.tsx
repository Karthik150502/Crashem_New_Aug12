'use client'
import React, { useState } from 'react'
import TextInputBefSess from '../ui/textInputBefSess/textInputBefSess'
import PasswordInputBS from '../ui/passwordInputBS/passwordInputBS'
import { Signinform, SignInType } from '@/app/lib/validations'
import { LoginFormErrors } from '@/app/lib/definitions'
import { useRouter } from 'next/navigation'
import SimpleMessage from '../message'
import "./styles.css"
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import githubLogo from './../../../assets/github-logo.png';
import googleLogo from './../../../assets/google-logo.png';

import { motion } from "framer-motion"

export default function SignInForm() {

    const router = useRouter()
    const [formData, setFormData] = useState<SignInType>({} as SignInType)
    const [state, setState] = useState<LoginFormErrors>({} as LoginFormErrors)

    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault()
        setState({} as LoginFormErrors)
        console.log(formData);
        const validation = Signinform.safeParse(formData)

        if (!validation.success) {
            setState({
                errors: validation.error.flatten().fieldErrors,
                message: '',
            })
            return
        }


        const { email, password } = validation.data;

        // const res = await signIn('credentials', { email, password, redirect: false });
        // console.log(res)
        // if (!res?.ok && res?.status !== 200) {
        //     setState({
        //         ...state,
        //         message: 'Invalid credentials, try different credentials.'
        //     })
        // }

        // if (res?.ok && res?.status === 200) {
        //     router.push("/dashboard");
        //     router.refresh()
        // }



    }

    const handleChange = (data: EventTarget & HTMLInputElement) => {
        setFormData(prev => {
            return {
                ...prev,
                [data.name]: data.value
            }
        })




    }

    return (
        <form onSubmit={handleForm} className='rounded-3xl bg-slate-950 form-bg px-8 pt-4 w-full flex flex-col items-center justify-center pb-8'>
            <section className='mt-4 flex flex-row items-center justify-center w-full h-auto'>
                <h1 className="text-black">Sign In</h1>
            </section>
            <TextInputBefSess name="email" onChange={(val) => handleChange(val)} label="Email" placeholder='John Elder' errorMsgs={state?.errors?.email ? state.errors.email : []} />
            <PasswordInputBS name="password" onChange={(val) => handleChange(val)} label="Password" placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' errorMsgs={state?.errors?.password ? state.errors.password[0] : ''} />

            <motion.button
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                type='submit'
                className='rounded-full text-sm w-max h-10 text-black mt-4 px-3 py-1   button'

            >
                Log in
            </motion.button>
            <section className='mt-2 w-full h-auto flex flex-row items-center justify-center'>
                {
                    state?.message && <SimpleMessage message={state.message} color='text-red-500' />
                }
            </section>
            <section className='mt-2 flex flex-row items-center justify-center w-full h-auto text-xs text-right text-white'>
                <span>Forgot password? </span><span className='hyper'>&nbsp;<a className='text-cyan-200 ' href="/forgotpassword">&nbsp;reset password</a></span>
            </section>
            <section className='w-full flex flex-col items-center justify-center gap-y-1  border-t-slate-300 mt-2'>
                <button onClick={() => signIn("google")} className='text-base w-full h-10 text-white mt-4 px-3 py-1 flex flex-row items-center justify-center gap-x-2 googlebtn bg-slate-950' type="button">
                    <Image src={googleLogo} alt="Google Logo" width={15} height={15}></Image>
                    Google</button>
                <button onClick={() => signIn("github")} className='text-base w-full h-10 text-white mt-4 px-3 py-1 flex flex-row items-center justify-center gap-x-2 githubtn bg-slate-950' type="button">
                    <Image src={githubLogo} className='githublogo' alt="Github Logo" width={15} height={15}></Image>
                    Github</button>
            </section>


        </form>
    )
}
