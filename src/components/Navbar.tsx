import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from 'primereact/button'

const Navbar = () => {
    return (
        <nav className='flex-between fixed z-50 w-full py-4 px-6 border-b border-dark-1 bg-dark-2'>
            <Link href='/' className='flex items-center gap-2'>
                <Image 
                    src='/logo.svg' 
                    alt='logo' 
                    width={32} 
                    height={32}>
                </Image>       
                <p className='text-[26px] font-extrabold hidden sm:block'>Feeddit</p>
            </Link>
            <div className="flex-between gap-4">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <Button className='font-semibold px-4 py-2'>
                        <SignInButton />
                    </Button>
                </SignedOut>
                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar