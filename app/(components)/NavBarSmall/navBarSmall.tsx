"use client"
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import "./styles.css"



import { menuListItemSmall } from '@/app/lib/config';
import { PowerOff, Menu, ArrowLeft, UserRound } from 'lucide-react'
import { usePathname } from 'next/navigation';

export default function NavSmall() {

    const pathName = usePathname();
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='flex flex-row justify-evenly items-center h-20 w-full navbar fixed top-0'>
            <div className="w-1/5 bg-white h-full">

            </div>
            <div className="w-4/5 bg-slate-950 h-full flex flex-row justify-end items-center z-10">
                <Menu size={44} className='text-white pr-2 hover:size-12 transition-all' strokeWidth="1" onClick={() => {
                    setShowMenu(true)
                }} />
            </div>

            <section className={clsx('absolute -right-44 top-0 h-screen w-40 z-10 pt-24 pl-6 flex flex-col items-center justify-start slider', {
                'right-0': showMenu,
            })}>
                <div className="w-full h-auto absolute top-6 pl-2">
                    <ArrowLeft strokeWidth="1" className="text-white" onClick={() => setShowMenu(false)} />
                </div>
                {
                    menuListItemSmall.map((item, index) => {
                        return <Link href={item.href} key={item.label} className={clsx(
                            'text-white text-sm flex flex-row justify-start items-center w-full mt-2 mb-2 ', "menu-item",
                            item.href === pathName ? 'selected' : ''
                        )}>
                            {item.label}
                        </Link>
                    })
                }
                <div className='absolute bottom-6 flex flex-col items-start justify-center mx-auto w-full right-1 gap-y-2 pl-6'>
                    <Link className="text-white flex flex-row items-center justify-center gap-x-1 text-xs profile" href="/profile"><UserRound strokeWidth="2" size={14} />Profile</Link>
                    <Link className="text-white flex flex-row items-center justify-center gap-x-1 text-xs hover:animate-pulse" href="/api/auth/signout?callbackUrl=/"><PowerOff strokeWidth="2" size={14} />Sign Out</Link>
                </div>
            </section>


        </div>
    )
}
