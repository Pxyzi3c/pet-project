import { gql } from '@apollo/client';

const GET_POSTS = gql`
    query Posts {
            posts {
            id
            author {
                clerkId
                email
                id
                name
                role {
                    id
                    name
                }
            }
            likes {
                id
                postId
                userId
            }
            title
            content
            category {
                id
                name
            }
        }
    }
`

const CREATE_POST = gql`
    mutation CreatePost($data: PostCreateInput!) {
        createPost(data: $data) {
            content
            title
            author {
                clerkId
                email
                id
            }
        }
    }
`;

export { GET_POSTS, CREATE_POST }