import { gql } from '@apollo/client';

const GET_POSTS = gql`
    query Posts {
        posts {
            id
            title
            content
            author
            likes {
                id
                postId
                user
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
            author 
        }
    }
`

const GET_CATEGORIES = gql`
    query Categories {
        categories {
            id
            name
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
    GET_CATEGORIES
}