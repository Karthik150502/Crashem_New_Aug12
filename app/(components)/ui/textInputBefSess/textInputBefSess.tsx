'use cleint'
import React from 'react'
import { useState } from 'react'
import ErrorMsg from '../../errorMsg'
import "./styles.css"

export default function TextInputBefSess({ label, name, placeholder, onChange, errorMsgs, maxL = 150, minL = 1 }: {
    label: string, name?: string, placeholder?: string, errorMsgs?: string[],
    onChange: (val: EventTarget & HTMLInputElement) => void, minL?: number, maxL?: number
}) {




    return (
        <label htmlFor='' className='flex flex-col items-start justify-center w-full my-1 relative h-22'>
            <p className='text-white text-sm ml-2 mb-1 label'>{label}</p>
            <input name={name} className='text-sm w-full text-white p-2 rounded-md outline-none border-none placeholder:text-slate-400 placeholder:text-sm  bg-transparent border-slate-500 outline-slate-500 inp' type="text" maxLength={maxL} minLength={minL} onChange={(e) => onChange(e.target)} placeholder={placeholder} />

            {

                errorMsgs && <div className="mt-2 w-full h-auto flex flex-row items-center justify-end">
                    {
                        errorMsgs.map((err, ind) => {
                            return <ErrorMsg key={ind} message={err} />
                        })
                    }
                </div>
            }

        </label >
    )
}
