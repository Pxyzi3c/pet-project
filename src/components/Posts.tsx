import React, { useEffect, useRef, useState } from 'react'

import { Panel } from 'primereact/panel';
import { Avatar } from 'primereact/Avatar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Heart } from 'lucide-react';

import { Tag } from 'primereact/tag';
        
import { categoriesList } from '@/constants';
import { useUser } from '@clerk/nextjs';

import { 
    GET_POSTS, 
} from '@/src/graphql/queries.js';

import { useQuery } from '@apollo/client';

const Posts = () => {
    const { user }  = useUser();
    const [posts, setPosts] = useState([]);
    const { data, loading, error } = useQuery(GET_POSTS);

    useEffect(() => {
        if (data) {
            setPosts(data.posts);
            console.log(data.posts);
        }
    }, [data])


    const headerTemplate = (post) => {
        return (
            <div className="flex align-items-center gap-2 bg-dark-1">
                <Avatar image={user?.imageUrl} shape="circle" />
                <span className="flex items-center font-semibold">{post?.author}</span>
            </div>
        );
    }

    const footerTemplate = (post) => {
        return (
            <div className="flex align-items-center gap-2">
                <Button 
                    icon={<Heart size={20}/>} 
                    className='py-1 px-1 ring-0 border-none'
                    rounded 
                    text 
                />
                <small className='font-semibold flex justify-center items-center'>{post?.likes ?? 0}</small>
            </div>
        );
    }

    return (
        <>  
            {posts?.map((post) => (
                <Panel key={post.id} header={() => headerTemplate(post)} footer={() => footerTemplate(post)} toggleable>
                    <p className='text-[16px] font-semibold'>{post.title}</p>
                    <p className='text-[16px] font-normal'>{post.content}</p>
                </Panel>
            ))}
        </>
    )
}

export default Posts