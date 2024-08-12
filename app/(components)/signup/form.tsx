'use client'
import React from 'react'
import { Signupform, SignUpType } from '@/app/lib/validations'
import { useState } from 'react'
import ErrorMsg from '../errorMsg'
import { SignupFormErrors } from '@/app/lib/definitions'
import { Eye, EyeOff } from 'lucide-react'
import { handleNewUser } from '@/app/lib/actions'
import { useRouter } from 'next/navigation'

import TextInputBefSess from '../ui/textInputBefSess/textInputBefSess'
import PasswordInputBS from '../ui/passwordInputBS/passwordInputBS'
import { SignUpUser } from '@/app/lib/definitions'
import SignUpPasswordVerify from '../signUpPasswordVerify'
import SimpleMessage from '../message'
import "./styles.css"
import { motion } from "framer-motion"
export default function SignUpForm() {

    const router = useRouter()


    const [state, setState] = useState<SignupFormErrors>({} as SignupFormErrors)
    const [formData, setFormData] = useState<SignUpUser>({} as SignUpUser)
    const handleChange = (data: EventTarget & HTMLInputElement) => {
        setFormData(prev => {
            return {
                ...prev,
                [data.name]: data.value
            }
        })
    }



    const handleForm = async (event: React.FormEvent) => {

        event.preventDefault()
        setState({} as SignupFormErrors)


        const validatedFields = Signupform.safeParse(formData);

        if (!validatedFields.success) {
            setState({
                errors: validatedFields.error.flatten().fieldErrors,
                message: 'There are some roadblocks, Kindly Verify.',
            })
            return
        }


        const { name, email, password } = validatedFields.data;

        const response = await handleNewUser({ name, email, password });
        if (response.status != 200) {
            setState({
                errors: {},
                message: response.message,
            })
            return
        }
        router.push("/signin");
        router.refresh()
    }


    return (

        <>


            <form onSubmit={handleForm} className='rounded-3xl bg-slate-950 form-bg px-8 py-4 w-full flex flex-col items-center justify-center gap-y-0'>
                <section className='mt-4 flex flex-row items-center justify-center w-full h-auto'>
                    <h1 className="text-black">Sign Up</h1>
                </section>
                <TextInputBefSess name="name" onChange={(val) => handleChange(val)} label="Name" placeholder='John Elder' errorMsgs={state?.errors?.name ? state.errors.name : []} />
                <TextInputBefSess name="email" onChange={(val) => handleChange(val)} label="Email" placeholder='johnelderexample@gmail.com' errorMsgs={state?.errors?.email ? state.errors.email : []} />
                <PasswordInputBS name="password" onChange={(val) => handleChange(val)} label="Password" placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' errorMsgs={state?.errors?.password ? state.errors.password[0] : ''} />
                <section className='mt-4 flex flex-row items-center justify-center w-full h-auto'>
                    <SignUpPasswordVerify />
                </section>
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    type='submit'
                    className='rounded-full w-max h-10 text-black mt-4 px-3 py-1 button text-sm'

                >
                    Register
                </motion.button>
                <section className='mt-2 w-full h-auto flex flex-row items-center justify-center'>
                    {
                        state?.message && <SimpleMessage message={state.message} color='text-red-500' />
                    }
                </section>


            </form>
        </>
    )
}
