import React from 'react'

const ForumLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='size-full'>
            {children}
        </main>
    )
}

export default ForumLayout