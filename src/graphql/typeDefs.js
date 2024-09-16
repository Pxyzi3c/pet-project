import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        posts: [Post!]!
        post(id: Int!): Post!
        categories: [Category!]!
        category(id: Int!): Category!
    }

    type Mutation {
        createPost(data: PostCreateInput!): Post!
        updatePost(id: Int!, data: PostUpdateInput!): Post!
        deletePost(id: Int!): Post!
        createCategory(data: CategoryCreateInput!): Category!
        likePost(postId: Int!, user: String!): Like!
    }

    type Post {
        id: Int!
        title: String!
        content: String!
        author: String!
        likes: [Like!]
        categoryId: Int!
    }

    type Like {
        id: Int!
        postId: Int!
        user: String!

        post: Post!
    }

    type Category {
        id: Int!
        name: String!
        posts: [Post!]!
    }

    input PostCreateInput {
        title: String!
        content: String!
        author: String!
        categoryId: Int!   
    }

    input PostUpdateInput {
        title: String
        content: String
        author: String!
        categoryId: Int
    }

    input CategoryCreateInput {
        name: String!
    }
`;

export default typeDefs;