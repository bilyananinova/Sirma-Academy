import axios from 'axios';

export async function getAllRecipes() {
    let result =  await axios.get('https://dummyjson.com/recipes');
    return result.data.recipes;
}

export async function getOneRecipe(id) {       
    let result =  await axios.get(`https://dummyjson.com/recipes/${id}`);        
    return result.data;
}