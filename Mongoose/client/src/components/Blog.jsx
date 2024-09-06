import PostCard from './PostCard';
import { useGetAllPosts } from '../../queries/useGetAllPosts';

export default function Blog() {
    let posts = useGetAllPosts();

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Blog</h1>

            {posts.isFetched &&
                (
                    posts.data.map(post =>
                        <PostCard post={post} key={post._id}/>
                    )
                )}
        </>
    )
};
