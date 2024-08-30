import { useContext } from 'react';

import { Container } from '@mui/material';

import { AuthContext } from "../contexts/AuthContext";
import { useGetAllUsersPosts } from "../queries/postsQueries";
import { PostCard } from "./PostCard";

export default function UserPosts() {
    let user = useContext(AuthContext);
    console.log(user);
    let userPostsQuery = useGetAllUsersPosts(user.auth.id);
console.log(userPostsQuery.data);


    return (
        <Container sx={{ w: 900 }}>
        <h1 style={{ textAlign: 'center' }}>UserPosts</h1>


        {userPostsQuery.isFetched &&
            userPostsQuery.data.map((post) =>
                <PostCard
                    sx={{ m: 10 }}
                    post={post}
                    key={post.id}
                />
            )}
    </Container>
    )
}