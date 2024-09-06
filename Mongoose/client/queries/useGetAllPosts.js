import { useQuery } from '@tanstack/react-query';

import { postKeys } from './postsKeys';
import { getPosts } from '../services/postService';

export function useGetAllPosts() {
    let postsQuery = useQuery({
        queryKey: postKeys.all(),
        queryFn: getPosts,
        initialData: []
    });

    return postsQuery;
}