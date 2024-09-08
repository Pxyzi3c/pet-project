"use client"

import React, { useEffect } from 'react'
import { useUser } from "@clerk/nextjs";

const MainPage = () => {
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            console.log(user)
        } 
    }, [user])

    return (
        <div className='size-full'>Main Page</div>
    )
}

export default MainPage