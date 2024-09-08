"use client"

import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
// import { GET_POSTS, CREATE_POST } from '@/graphql/queries.js';

import { Button } from 'primereact/button';

const Feed = () => {
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState({})
    // const [createPost] = useMutation(CREATE_POST)
    // const {loading, error, data} = useQuery(GET_POSTS)

    // useEffect(() => {
    //     if (data) {
    //         setPosts(data.posts)
    //         console.log(data.posts)
    //     }
    // }, [data, posts])

    // if (loading) {
    //     return <p>Loading...</p>
    // }

    // if (error) {
    //     console.log(error)
    //     return <p>Error :(</p>
    // }

    // const handleCreatePost = async () => {
    //     try {
    //         setNewPost({
    //             title: 'My new post',
    //             content: 'This is my new post',
    //         })

    //         await createPost({
    //             variables: {
    //                 newPost
    //             }
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <section className='size-full'>
            <Button label="Create Post" onClick={handleCreatePost}></Button>
        </section>
    )
}

export default Feed