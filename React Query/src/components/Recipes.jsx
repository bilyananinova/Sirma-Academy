import ImageList from '@mui/material/ImageList';

import RecipeCard from './RecipeCard';

import { useGetAllRecipes } from '../queries/recipesQueries';

export default function Recipes() {
    let recipesQuery = useGetAllRecipes();

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Recipes</h1>

            <ImageList sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} rowHeight={164}>
                {recipesQuery.data.map((recipe) =>
                    <RecipeCard
                        recipe={recipe}
                        key={recipe.id}
                    />
                )}
            </ImageList>
        </>
    );
}
