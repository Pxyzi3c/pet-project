import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import { categories, posts } from './data.js'; 

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { PORT = 4000 } = process.env;

const app = express();

app.use(express.json());

// RESTful routes for Posts
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

// RESTful routes for Categories
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Set up Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
const startServer = async () => {
    await server.start(); // Wait for the server to start
    server.applyMiddleware({ app }); // Apply middleware to the Express app

    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer();