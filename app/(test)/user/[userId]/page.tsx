'use client'
import React, { useEffect, useState } from 'react'
import { testFunc } from '@/app/lib/test';
interface UserPagerPops {
    params: {
        userId: string;
    };
}

export default function page({ params }: UserPagerPops) {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        func()
    }, [])

    const func = async () => {
        const user = await testFunc(params.userId);
        console.log(user)
        setUserData(user)
    }

    return (
        <div>
            <p className='w-screen h-auto bg-red-600 font-extralight text-center'>{params.userId}</p>
            <p>Id: {userData?.id}</p>
            <p>Name: {userData?.name}</p>
            <p>Email: {userData?.email}</p>

        </div>
    )
}
