import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Feed ',
}

const FeedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default FeedLayout