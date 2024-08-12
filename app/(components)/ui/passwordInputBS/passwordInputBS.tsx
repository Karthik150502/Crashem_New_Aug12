'use cleint'
import React from 'react'
import { useState } from 'react'
import ErrorMsg from '../../errorMsg'
import "./styles.css"
import { Eye, EyeOff } from 'lucide-react'
export default function PasswordInputBS({ label, name, placeholder, onChange, errorMsgs, maxL = 150, minL = 1 }: {
    label: string, name?: string, placeholder?: string, errorMsgs?: string,
    onChange: (val: EventTarget & HTMLInputElement) => void, minL?: number, maxL?: number
}) {

    const [showPwd, setShowPwd] = useState<Boolean>(false);


    return (
        <label htmlFor='' className='h-22 relative flex flex-col items-start justify-center w-full my-1'>
            <p className='text-white text-sm ml-2 mb-1 label'>{label}</p>
            <div className="w-full relative">
                <input name={name} className='w-full text-sm text-white p-2 rounded-md outline-none border-none placeholder:text-slate-400 placeholder:text-sm  bg-transparent border-slate-500 outline-slate-500 inp' type={showPwd ? "text" : "password"} placeholder={placeholder} maxLength={maxL} minLength={minL} onChange={(e) => onChange(e.target)} />

                {
                    showPwd ? <Eye strokeWidth={1} className='absolute right-2 text-white top-[7px] cursor-pointer' onClick={() => setShowPwd(false)} /> : <EyeOff strokeWidth={1} className='absolute right-2 text-white top-[7px] cursor-pointer' onClick={() => setShowPwd(true)} />
                }
            </div>


            <div className="mt-2 w-full h-auto flex flex-row items-start justify-end scrl">
                {
                    errorMsgs && <ErrorMsg message={errorMsgs} />
                }
            </div>
        </label >
    )
}
