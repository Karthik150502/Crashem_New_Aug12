import React from 'react'
import { PencilOff } from 'lucide-react';
import clsx from 'clsx';
export default function SimpleMessage({ message, color }: { message: string, color: string }) {

    return (
        <div className='mx-2 flex flex-row items-start justify-center' >
            <p className={clsx('text-xs font-thin w-max', color)}>{message}</p>
        </div >
    )
}
