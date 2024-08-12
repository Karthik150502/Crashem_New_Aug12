import React from 'react'

export default function Button({ onClick, label }: { onClick: () => any, label: string }) {
    return (
        <button onClick={onClick} className='p-2 px-4 h-10 bg-black hover:bg-slate-900'>
            {label}
        </button>
    )
}
