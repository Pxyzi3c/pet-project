import { categories, posts } from './data.js';

let nextCategoryId = categories.length + 1; // To generate unique IDs for new categories

const BASE_URL = 'http://localhost:4000';

const resolvers = {
    Query: {
        posts: () => {
            return posts;
        },
        post: (_, { id }) => {
            return posts.find(post => post.id === id) || null;
        },
        categories: async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/categories`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                return data; // Ensure this is an array
            } catch (error) {
                console.error('Fetch error:', error);
                throw new Error('Failed to fetch categories');
            }
        },
        category: (_, { id }) => {
            return categories.find(category => category.id === id) || null;
        },
    },
    Mutation: {
        createPost: async (_, { data }) => {
            try {
                const response = await fetch(`${BASE_URL}/api/posts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const newPost = await response.json();

                return newPost;
            } catch (error) {
                console.error('Error Creating Post:', error);
                throw new Error('Failed to create post');
            }
        },
        deletePost: async (_, { id }) => {
            try {
                const response = await fetch(`${BASE_URL}/api/posts/${id}`, {
                    method: 'DELETE',
                });
    
                if (!response.ok) {
                    throw new Error('Failed to delete post');
                }
    
                const deletedPost = await response.json();
                return deletedPost;
            } catch (error) {
                console.error('Error Deleting Post:', error);
                throw new Error('Failed to delete post');
            }
        },

        likePost: (_, { postId, user }) => {
            const post = posts.find(post => post.id === postId);
            if (!post) throw new Error('Post not found');

            const newLike = {
                id: nextLikeId++,
                postId,
                user,
            };
            likes.push(newLike); 
            post.likes.push(newLike);

            return newLike; 
        },
        createCategory: (_, { data }) => {
            const newCategory = { id: nextCategoryId++, ...data };
            categories.push(newCategory);
            return newCategory;
        },
    },
};

export default resolvers;
