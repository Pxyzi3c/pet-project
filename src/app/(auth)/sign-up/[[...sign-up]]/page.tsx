"use client"

import { useSignUp, SignUp } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const SignUpPage = () => {
    const { isLoaded, signUp} = useSignUp()

    useEffect(() => {
        if (isLoaded && signUp.status === "complete") {
            console.log(`SIGN UP COMPLETE: ${signUp}`)
        }
    }, [isLoaded, signUp])
    return (
        <main className='flex h-screen w-full items-center justify-center'>
            <SignUp />
        </main>
    )
}

export default SignUpPage