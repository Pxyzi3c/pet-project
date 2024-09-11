import { gql } from '@apollo/client';

const GET_POSTS = gql`
    query Posts {
        posts {
            id
            title
            content
            author {
                clerkId
                email
                id
                name
                roleId
            }
            likes {
                id
                postId
                userId
            }
            categoryId
        }
    }
`

const CREATE_POST = gql`
    mutation CreatePost($data: PostCreateInput!) {
        createPost(data: $data) {
            content
            title
            categoryId
            author {
                clerkId
                email
                id
                name
                roleId
            }
        }
    }
`

const GET_USERS = gql`
    query Users {
        users {
            id
            clerkId
            email
            name
            roleId
        }
    }
`

const GET_USER = gql`
    query User($userId: Int!) {
        user(id: $userId) {
            id
            clerkId
            email
            name
            roleId
            likes {
                id
                postId
                userId
            }
            posts {
                id
                title
                content
                categoryId
            }
        }
    }
`

const CREATE_USER = gql`
    mutation CreateUser($data: UserCreateInput!) {
        createUser(data: $data) {
            clerkId
            email
            name
            roleId
        }
    }
`

const CREATE_CATEGORY = gql`
    mutation CreateCategory($data: CategoryCreateInput!) {
        createCategory(data: $data) {
            id
            name
        }
    }
`;

export { 
    GET_POSTS, 
    CREATE_POST,
    CREATE_CATEGORY,
    CREATE_USER,
    GET_USERS,
    GET_USER
}