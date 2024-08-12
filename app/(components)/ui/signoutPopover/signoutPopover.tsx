'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
export default function SignoutPopover() {


    return (
        <div className='w-80 h-40 flex flex-col items-center justify-start rounded-md bg-white'>
            <form onSubmit={() => { signOut() }} className='w-full h-full flex flex-col items-center justify-center'>
                <p className='my-4 text-black'>Do you want to logout of Crashem?</p>
                <input type="submit" value="Logout" className='p-2 cursor-pointer bg-black rounded-md text-white' />
            </form>
        </div>
    )
}
