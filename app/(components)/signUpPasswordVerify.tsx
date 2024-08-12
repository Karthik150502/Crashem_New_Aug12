'use client'
import React from 'react'
import { PwdComplianceInfo } from '../lib/config'
import { Info, Disc2 } from 'lucide-react'
export default function SignUpPasswordVerify() {




    return (
        <div className='w-full h-auto flex flex-col items-start justify-start gap-y-[2px]'>
            {
                PwdComplianceInfo && PwdComplianceInfo.map((pwd, index) => {
                    return <p key={index} className='mx-2 text-[10px] text-white flex flex-row items-center justify-center gap-x-1'><Info strokeWidth={2} size={12} />{pwd.text}</p>
                })
            }
        </div >
    )
}
