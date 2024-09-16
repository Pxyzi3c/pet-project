"use client"

import React, { useEffect, useState } from 'react'
import ShareThoughtsPanel from '@/src/components/ShareThoughtsPanel';
import Posts from '@/src/components/Posts';

const ForumPage = () => {
    return (
        <section className='size-full flex flex-col gap-10'>
            <ShareThoughtsPanel />
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-bold'>Posts</h1>
                <Posts />
            </div>
        </section>
    )
}

export default ForumPage