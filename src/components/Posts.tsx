import React, { useEffect, useRef, useState } from 'react'

import { Panel } from 'primereact/panel';
import { Avatar } from 'primereact/Avatar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Heart, Trash } from 'lucide-react';
        
import { useUser } from '@clerk/nextjs';

import { 
    GET_POSTS, 
    DELETE_POST
} from '@/src/graphql/queries.js';

import { useMutation, useQuery } from '@apollo/client';

const Posts = () => {
    const { user }  = useUser();
    const toast = useRef<Toast>(null);
    const [posts, setPosts] = useState([]);
    const { data, loading, error } = useQuery(GET_POSTS);
    const [deletePost] = useMutation(DELETE_POST);

    useEffect(() => {
        if (data) {
            setPosts(data.posts);
            console.log(data.posts);
        }
    }, [data])

    const handleDeletePost = async (id: number) => {
        try {
            const { data } = await deletePost({ variables: { id: id } });
            console.log('Deleted post:', data.deletePost);
            toast.current?.show({ severity: 'success', summary: 'Post Deleted', detail: `Post #${id} has been deleted successfully` });
            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.log(error);
            toast.current?.show({ severity: 'error', summary: 'Error Deleting Post', detail: "An error occurred. Please try again!" });
        }
    }

    const headerTemplate = (post: object) => {
        return (
            <div className="flex align-items-center gap-2 bg-dark-1">
                <Avatar image={user?.imageUrl} shape="circle" />
                <span className="flex items-center font-semibold">{post?.author}</span>
            </div>
        );
    }

    const footerTemplate = (post: object, id: number) => {
        return (
            <div className="flex align-items-center justify-between gap-2">
                <div className='flex gap-2'>
                    <Button 
                        icon={<Heart size={20}/>} 
                        className='py-1 px-1 ring-0 border-none'
                        rounded 
                        text 
                    />
                    <small className='font-semibold flex justify-center items-center'>{post?.likes ?? 0}</small>
                </div>
                {user?.primaryEmailAddress?.emailAddress === post?.author ? (
                    <Button 
                        icon={<Trash size={20}/>} 
                        className='py-1 px-1 ring-0 border-none'
                        rounded 
                        text 
                        severity='danger'
                        onClick={() => handleDeletePost(id)}
                    />
                ) : null}
                <Toast ref={toast} position='top-center'/>
            </div>
        );
    }

    return (
        <>  
            {posts?.map((post) => (
                <Panel key={post.id} header={() => headerTemplate(post)} footer={() => footerTemplate(post, post.id)} toggleable>
                    <p className='text-[16px] font-semibold'>{post.title}</p>
                    <p className='text-[16px] font-normal'>{post.content}</p>
                </Panel>
            ))}
        </>
    )
}

export default Posts