import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import { categories, posts } from './data.js'; 

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { PORT = 4000 } = process.env;

const app = express();

app.use(express.json());

// POSTS RESTful routes
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.post('/api/posts', (req, res) => {
    const { title, content, author, categoryId } = req.body;
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        author,
        categoryId,
    };
    posts.push(newPost);
    res.json(newPost);
});

app.delete('/api/posts/:id', (req, res) => {
    const { id } = req.params; 
    const postIndex = posts.findIndex(post => post.id === parseInt(id));
    
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    const deletedPost = posts[postIndex];
    posts.splice(postIndex, 1);
    res.json(deletedPost); 
});

app.post('/api/posts/:postId/like', (req, res) => {
    const { postId } = req.params;
    const { user } = req.body;

    const post = posts.find(post => post.id === parseInt(postId));
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const newLike = {
        id: nextLikeId++,
        postId: parseInt(postId),
        user,
    };
    likes.push(newLike);
    post.likes.push(newLike);

    res.json(newLike);
});


// CATEGORIES RESTful routes
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
    await server.start(); // Wait for the server to start
    server.applyMiddleware({ app }); // Apply middleware to the Express app

    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer();