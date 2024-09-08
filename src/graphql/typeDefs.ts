import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        posts: [Post!]!
        post(id: Int!): Post!
        users: [User!]!
        user(id: Int!): User!
    }

    type Mutation {
        createPost(data: PostCreateInput!): Post!
        updatePost(id: Int!, data: PostUpdateInput!): Post!
        deletePost(id: Int!): Post!
        createUser(data: UserCreateInput!): User!
        updateUser(id: Int!, data: UserUpdateInput!): User!
    }

    type User {
        id: Int!
        clerkId: String!
        email: String!
        name: String
        role: Role!
        posts: [Post!]
        likes: [Like!]
    }

    type Role {
        id: Int!
        name: String! @unique
    }

    type Post {
        id: Int!
        title: String!
        content: String!
        author: User!
        likes: [Like!]
        category: Category!

        createdAt: DateTime!
        updatedAt: DateTime!
    }

    type Like {
        id: Int!
        postId: Int!
        userId: Int!
        createdAt: DateTime!

        post: Post!
        user: User!
    }

    type Category {
        id: Int!
        name: String!
        posts: [Post!]!
    }

    input PostCreateInput {
        title: String!
        content: String!
        authorId: Int!
        categoryId: Int!   
    }

    input PostUpdateInput {
        title: String
        content: String
        authorId: Int
        categoryId: Int
    }

    input UserCreateInput {
        clerkId: String!
        email: String!
        name: String
        roleId: Int!
    }

    input UserUpdateInput {
        clerkId: String
        email: String
        name: String
        roleId: Int
    }
`;

export default typeDefs;