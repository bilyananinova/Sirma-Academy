export const postKeys = {
    all: () => ['posts'],
    one: (id) => ['posts', id],
    create: () => ['create-post'],
    update: () => ['update-post'],
    delete: () => ['delete']
}