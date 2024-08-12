import React from 'react'
import { PencilOff } from 'lucide-react';
import clsx from 'clsx';
export default function ErrorMsg({ message }: { message: string }) {
    const color = 'text-red-500'

    return (
        <div className='mx-2 flex flex-row items-start justify-center gap-x-2' >
            <PencilOff className={clsx(color)} strokeWidth={1} size={15} /><p className={clsx('text-xs font-thin w-max', color)}>{message}</p>
        </div >
    )
}
