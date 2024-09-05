import { useEffect, useState } from 'react';
import { getPosts } from '../../services/postService';
import PostCard from './PostCard';

export default function Blog() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetch() {
            let result = await getPosts();
            setPosts(result);
        }
        fetch()
    }, []);

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Blog</h1>

            {posts.map(post =>
                <PostCard post={post} key={post._id} />
            )}
        </>
    )
};
