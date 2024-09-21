import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { PORT = 3030 } = process.env;

const server = new ApolloServer({typeDefs, resolvers});

server
    .listen(PORT)
    .then(({ url }) => console.log(`🚀 Server ready at ${url}`))