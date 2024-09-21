import { gql } from '@apollo/client';

const GET_POSTS = gql`
    query Posts {
        posts {
            content
            id
            title
        }
    }
`

const CREATE_POST = gql`
    mutation CreatePost($data: PostCreateInput!) {
        createPost(data: $data) {
            id
            title
            content
        }
    }
`;

export { GET_POSTS, CREATE_POST }