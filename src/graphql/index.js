import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { PORT = 3030 } = process.env;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server
    .listen(PORT)
    .then(({ url }) => console.log(`🚀 Server ready at ${url}`))