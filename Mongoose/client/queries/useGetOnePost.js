import { useQuery } from '@tanstack/react-query';

import { postKeys } from './postsKeys';
import { getOne } from '../services/postService';

export function useGetOnePost(id) {
    let postQuery = useQuery({
        queryKey: (id) => postKeys.one(id),
        queryFn: () => getOne(id),
        initialData: {}
    });

    return postQuery;
}