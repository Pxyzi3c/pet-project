// import { ApolloServer } from 'apollo-server';
// import typeDefs from './typeDefs.js';
// import resolvers from './resolvers.js';
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const { PORT = 3030 } = process.env;

// const server = new ApolloServer({typeDefs, resolvers});

// server
//     .listen(PORT)
//     .then(({ url }) => console.log(`🚀 Server ready at ${url}`))

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import { categories, posts, users } from './data.js'; 

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { PORT = 3030 } = process.env;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// RESTful routes for Users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// RESTful routes for Posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
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