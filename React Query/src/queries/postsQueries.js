import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getAllPosts, getOnePost, createPost, deletePost, getAllUsersPosts, updatePost } from '../services/postsServices';
import { postsKeys } from './posts-query-keys';



export function useGetAllPosts() {
    let postsQuery = useQuery({
        queryKey: postsKeys.all(),
        queryFn: getAllPosts,
        initialData: [],
    });

    return postsQuery;
}

export function useGetAllUsersPosts(id) {
    let postsQuery = useQuery({
        queryKey: postsKeys.usersPost(),
        queryFn: () => getAllUsersPosts(id),
        initialData: [],
    });

    return postsQuery;
}

export function useGetSinglePost(id) {
    let postQuery = useQuery({
        queryKey: postsKeys.one(id),
        queryFn: () => getOnePost(id),
        initialData: {},
    });

    return postQuery;
}

export function useCreatePost() {
    let queryClient = useQueryClient();
    let createPostMutationQuery = useMutation({
        mutationFn: createPost,
        mutationKey: postsKeys.create,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: postsKeys.all()
            });
        }
    })

    return createPostMutationQuery;
}

export function useUpdatePost(id, title, body, userId) {
    let queryClient = useQueryClient();

    let updatePostMutationQuery = useMutation({
        mutationFn: () => updatePost(id, title, body, userId),
        mutationKey: postsKeys.update(),
        onSuccess: ({ data }) => {          
            queryClient.setQueryData(postsKeys.one(id), data);
        }
    });

    return updatePostMutationQuery;
}

export function useDeletePost(id) {
    let deletePostQuery = useMutation({
        mutationFn: () => deletePost(id),
        mutationKey: postsKeys.delete()
    });

    return deletePostQuery;
}