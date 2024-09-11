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
        <main className='relative'>
            <Navbar />
            <div className='flex'>
                <Sidebar />

                <section className='flex min-h-screen flex-col px-6 pb-6 pt-28 md:pb-14 sm:px-14 w-full'>
                    <div>
                        {children}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ForumLayout