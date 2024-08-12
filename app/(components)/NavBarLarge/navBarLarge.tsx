'use client'

import './styles.css';


import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { menuListItemLarge } from '@/app/lib/config';
import { PowerOff, UserRound } from 'lucide-react'
import { usePathname } from 'next/navigation';



export default function NavLarge() {

    const pathName = usePathname();

    return (
        <div className={clsx(
            'w-26 p-4 h-screen fixed flex flex-col items-center justify-end navbar'
        )}>
            <div className="h-1/3 w-full"></div>
            <div className="menu-items w-full h-1/3 flex flex-col items-center justify-start gap-y-5">
                {
                    menuListItemLarge.map((item) => {
                        return <Link href={item.href} key={item.label} className={clsx(
                            'text-white text-base flex flex-row justify-start items-center w-full', "menu-item",
                            item.href === pathName ? 'selected' : ''
                        )}>
                            {item.label}
                        </Link>
                    })
                }
            </div>
            <div className="h-1/3 other menu-items w-full flex flex-col items-start justify-end gap-y-2">

                <Link className="text-white flex flex-row items-center justify-center gap-x-1 text-xs profile" href="/profile"><UserRound strokeWidth="2" size={14} />Profile</Link>
                <p className="text-white flex flex-row items-center justify-center gap-x-1 text-xs hover:animate-pulse cursor-pointer" onClick={() => signOut({ callbackUrl: "/", redirect: true })}><PowerOff strokeWidth="2" size={14} />Sign Out</p>
                {/* <Link className="text-white flex flex-row items-center justify-center gap-x-1 text-xs hover:animate-pulse" href="/api/auth/signout?callbackUrl=/"><PowerOff strokeWidth="2" size={14} />Sign Out</Link> */}

            </div>

        </div>
    )
}
