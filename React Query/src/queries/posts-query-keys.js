export let postsKeys = {
    all: () => ['posts'],
    usersPost: () => ['users-posts'],
    one: (id) => ['posts', id],
    create: () => ['create-post'],
    update: () => ['update-post'],
    delete: () => ['delete-post'],
}