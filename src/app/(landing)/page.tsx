"use client"

import React, { useEffect } from 'react'
import { useUser } from "@clerk/nextjs";
import Navbar from '@/src/components/Navbar';

const MainPage = () => {
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            console.log(user)
        } 
    }, [user])

    return (
        <main className='relative'>
            <Navbar />
        </main>
    )
}

export default MainPage