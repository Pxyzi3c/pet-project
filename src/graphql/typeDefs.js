import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        posts: [Post!]!
        post(id: Int!): Post!
    }

    type Mutation {
        createPost(data: PostCreateInput!): Post!
        updatePost(id: Int!, data: PostUpdateInput!): Post!
        deletePost(id: Int!): Post!
    }

    input PostCreateInput {
        title: String!
        content: String!
    }

    input PostUpdateInput {
        title: String
        content: String
    }

    type Post {
        id: Int!
        title: String!
        content: String!
    }
`;

export default typeDefs;