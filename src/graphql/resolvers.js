import { roles, categories, posts, users } from './data.js';

let nextPostId = posts.length + 1; // To generate unique IDs for new posts
let nextUserId = users.length + 1; // To generate unique IDs for new users
let nextCategoryId = categories.length + 1; // To generate unique IDs for new categories

const resolvers = {
    Query: {
        posts: () => {
            return posts;
        },
        post: (_, { id }) => {
            return posts.find(post => post.id === id) || null;
        },
        users: () => {
            return users;
        },
        user: (_, { id }) => {
            return users.find(user => user.id === id) || null;
        },
        categories: () => {
            return categories;
        },
        category: (_, { id }) => {
            return categories.find(category => category.id === id) || null;
        },
    },
    Mutation: {
        createPost: (_, { data }) => {
            const newPost = { id: nextPostId++, ...data };
            posts.push(newPost);
            return newPost;
        },
        updatePost: (_, { id, data }) => {
            const postIndex = posts.findIndex(post => post.id === id);
            if (postIndex === -1) return null; // Post not found

            const updatedPost = { ...posts[postIndex], ...data };
            posts[postIndex] = updatedPost;
            return updatedPost;
        },
        deletePost: (_, { id }) => {
            const postIndex = posts.findIndex(post => post.id === id);
            if (postIndex === -1) return null; // Post not found

            const deletedPost = posts[postIndex];
            posts.splice(postIndex, 1); // Remove the post from the array
            return deletedPost;
        },
        createUser: (_, { data }) => {
            const newUser = { id: nextUserId++, ...data };
            users.push(newUser);
            return newUser;
        },
        updateUser: (_, { id, data }) => {
            const userIndex = users.findIndex(user => user.id === id);
            if (userIndex === -1) return null; // User not found

            const updatedUser = { ...users[userIndex], ...data };
            users[userIndex] = updatedUser;
            return updatedUser;
        },
        createCategory: (_, { data }) => {
            const newCategory = { id: nextCategoryId++, ...data };
            categories.push(newCategory);
            return newCategory;
        },
    },
};

export default resolvers;
