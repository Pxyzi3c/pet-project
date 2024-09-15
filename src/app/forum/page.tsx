"use client"

import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_POSTS, GET_CATEGORIES, CREATE_POST } from '@/src/graphql/queries.js';
import ShareThoughtsPanel from '@/src/components/ShareThoughtsPanel';

const ForumPage = () => {
    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])

    const [newPost, setNewPost] = useState({})
    const [createPost] = useMutation(CREATE_POST)
    const {loading: loadingCategories, error: errorCategories, data: dataCategories} = useQuery(GET_CATEGORIES)

    useEffect(() => {
        if (dataCategories) {
            setCategories(dataCategories.categories)
            console.log(dataCategories.categories)
        }
    }, [dataCategories])

    if (loadingCategories) {
        return <p>Loading...</p>
    }

    if (errorCategories) {
        console.log(errorCategories)
        return <p>Error :(</p>
    }

    const handleCreatePost = async () => {
        try {
            setNewPost({
                title: 'My new post',
                content: 'This is my new post',
            })

            await createPost({
                variables: {
                    newPost
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className='size-full'>
            <ShareThoughtsPanel />
        </section>
    )
}

export default ForumPage