import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postKeys } from './postsKeys';
import { deleteOne } from '../services/postService';

export function useDeletePost(id) {
    let queryClient = useQueryClient();

    let postQuery = useMutation({
        mutationKey: () => postKeys.delete(),
        mutationFn: () => deleteOne(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: postKeys.all()
            })
        }
    });

    return postQuery;
}