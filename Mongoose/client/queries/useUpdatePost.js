import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postKeys } from './postsKeys';
import { update } from '../services/postService';

export function useUpdatePost(id) {
    let queryClient = useQueryClient();

    let postQuery = useMutation({
        mutationFn: update,
        mutationKey: postKeys.update(),
        onSuccess: ({ data }) => {
            queryClient.setQueryData(postKeys.one(id), data);
        },
    });

    return postQuery;
}