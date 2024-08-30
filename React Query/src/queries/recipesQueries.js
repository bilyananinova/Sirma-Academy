import { useQuery } from '@tanstack/react-query';
import { getAllRecipes, getOneRecipe } from '../services/recipesServices';
import { recipesKeys } from './recipes-query-keys';

export function useGetAllRecipes() {
    let recipesQuery = useQuery({
        queryKey: recipesKeys.all(),
        queryFn: getAllRecipes,
        initialData: [],
    });

    return recipesQuery;
}

export function useGetOneRecipe(id) {      
    let recipeQuery = useQuery({
        queryKey: recipesKeys.one(id),
        queryFn: () => getOneRecipe(id),
        initialData: {},
    });

    return recipeQuery;
}