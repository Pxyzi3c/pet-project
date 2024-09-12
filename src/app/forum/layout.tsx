import React from 'react'
import { Metadata } from 'next';

import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
// import { CREATE_USER, GET_USER } from '@/src/graphql/queries.js';
import Navbar from '@/src/components/Navbar';
import Sidebar from '@/src/components/Sidebar';

export const metadata: Metadata = {
    title: {
        template: 'Forum ',
        default: 'Forum', // a default is required when creating a template
    },
}

const ForumLayout = ({ children }: { children: React.ReactNode }) => {
    
    return (
        // TODO: Transform the element below the {children} into a component 
        <main className='relative'>
            <Navbar />
            <div className='flex'>
                <Sidebar />

                <section className='flex min-h-screen flex-col px-4 pb-4 pt-24 md:pb-6 sm:px-6 w-full'>
                    <div className='flex gap-6'>
                        {children}
                        <div className='flex flex-col gap-4 p-4 border border-dark-1 max-sm:hidden md:w-[400px] rounded'>
                            <p className='font-semibold'>Suggested Communities</p>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ForumLayout