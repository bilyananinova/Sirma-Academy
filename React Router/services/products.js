function getAllCategories() {
    return fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(result => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}

function getAll() {
    return fetch('https://dummyjson.com/products/category/womens-dresses')
        .then(res => res.json())
        .then(result => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}

function getSingle(id) {
    return fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(result => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}


export {
    getAllCategories,
    getAll,
    getSingle
}

