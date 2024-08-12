import React from 'react'
import { getServerSession } from "next-auth"
import { options } from '@/app/api/auth/[...nextauth]/options'
import { redirect } from "next/navigation"
import Link from 'next/link'
export default async function page() {


    const session = await getServerSession(options)

    console.log("Session")

    console.log('Session = ', session)

    if (!session) {
        redirect("/api/auth/signin?/callbackUrl=/profile")
    }

    return (
        <section className='p-4'>
            <p className='text-center text-2xl'>My Profile</p>
            <p className='text-xs'>User - {session?.email}</p>
            <p className='text-xs'>Name - {session?.name}</p>
            <Link href={`/user/${session.id}`}>Go to user profile</Link>
        </section>
    )
}
