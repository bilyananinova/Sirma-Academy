import { useContext } from 'react';

import { Container } from '@mui/material';

import { useGetAllPosts } from '../queries/postsQueries';
import { PostCard } from './PostCard';
import { AuthContext } from '../contexts/AuthContext';

export default function Post() {
    let postsQuery = useGetAllPosts();

    let user = useContext(AuthContext);
    console.log(user);

    return (
        <>
            <Container sx={{ w: 900 }}>
                <h1 style={{ textAlign: 'center' }}>Posts</h1>


                {postsQuery.isFetched &&
                    postsQuery.data.map((post) =>
                        <PostCard
                            sx={{ m: 10 }}
                            post={post}
                            key={post.id}
                        />
                    )}
            </Container>
        </>
    );
}