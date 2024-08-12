import React from 'react'
import { CircleAlert } from 'lucide-react';
export default function WarningMsg({ message }: { message: string }) {
    return (
        <div className='mx-2 flex flex-row items-start justify-center gap-x-2' >
            <CircleAlert className='text-yellow-500' strokeWidth={1} size={15} /><p className='text-yellow-500 text-xs font-thin w-max'>{message}</p>
        </div >
    )
}
