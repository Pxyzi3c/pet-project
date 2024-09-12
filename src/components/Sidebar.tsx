'use client'

import React from 'react'

import { sidebarLinks } from '@/constants'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Button } from 'primereact/button';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-2 border-r border-dark-1 p-4 pt-24 text-white max-sm:hidden lg:w-[400px]">
            <div className='flex flex- flex-col gap-4'>
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route;

                    console.log(isActive)
                    return (
                        <Link 
                            href={link.route}
                            key={link.label}
                        >
                            <Button 
                                className='w-full flex gap-4 py-2 px-4 items-center text-start ring-0'
                                text={!isActive}
                            >
                                {link.icon}
                                <p className='font-semibold max-lg:hidden'>{link.label}</p>
                            </Button>
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}

export default Sidebar