import React, { useRef, useState } from 'react'

import { Panel } from 'primereact/panel';
import { Avatar } from 'primereact/Avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
        
import { categoriesList } from '@/constants';
import { useUser } from '@clerk/nextjs';

import { 
    CREATE_POST, 
} from '@/src/graphql/queries.js';

import { useMutation } from '@apollo/client';

const ShareThoughtsPanel = () => {
    const { user }  = useUser();
    const toast = useRef<Toast>(null);
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
        author: '',
        categoryId: 0
    });
    const [createPost] = useMutation(CREATE_POST);

    const handleActiveCategory = (id: number) => {
        setNewPost({
            ...newPost,
            categoryId: id
        })
    }

    const handlePost = async () => {
        const title = categoriesList.find((category) => category.id === newPost.categoryId)?.label ?? 'Untitled';
        const author = user?.primaryEmailAddress?.emailAddress || user?.fullName;

        try {
            const response = await createPost({
                variables: {
                    data: {
                        title: title,
                        content: newPost.content,
                        author: author,
                        categoryId: newPost.categoryId
                    }
                }
            })

            console.log('Post created:', response.data.createPost);
            toast.current?.show({ severity: 'success', summary: 'Post Created', detail: "Your post has been created!" });
        } catch (error) {
            console.log(error)
            toast.current?.show({ severity: 'error', summary: 'Error Creating Post', detail: "An error occurred. Please try again!" });
        }

        setNewPost({
            ...newPost,
            title: '',
            content: '',
            categoryId: 0
        })
    }

    const headerTemplate = (options: string) => {
        const className = `${options?.className} flex justify-content-space-between p-4`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <Avatar image={user?.imageUrl} shape="circle" />
                    <span className="flex items-center font-semibold">{user?.fullName}</span>
                </div>
            </div>
        );
    };

    const footerTemplate = (options: string) => {
        const className = `${options?.className} flex flex-wrap align-items-center justify-between p-4`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    {categoriesList.map((category) => (
                        <Button 
                            key={category.id}
                            className='font-semibold gap-4 py-2 px-4 items-center text-start ring-0 border-none'
                            rounded
                            outlined={newPost.categoryId !== category.id}
                            label={category.label}
                            icon={category.icon}
                            onClick={() => handleActiveCategory(category.id)}
                        />
                    ))}
                </div>
                <Button 
                    label="Post" 
                    className='py-2 px-4'
                    rounded 
                    onClick={handlePost}
                />
                <Toast ref={toast} position='top-center'/>
            </div>
        );
    };

    return (
        <Panel headerTemplate={headerTemplate} footerTemplate={footerTemplate}>
            <InputText 
                type="text" 
                placeholder="Share your thoughts..." 
                className='w-full border-none ring-0 p-0 bg-[#1f2937]'
                onChange={(e) => setNewPost({
                    ...newPost,
                    content: e.target.value
                })}
                value={newPost.content}
            />
        </Panel>
    )
}

export default ShareThoughtsPanel