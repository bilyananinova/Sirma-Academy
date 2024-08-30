import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import Rating from '@mui/material/Rating';

import { useGetOneRecipe } from '../queries/recipesQueries';

export default function RecipeDetails() {
    let { id } = useParams();
    let [value, setValue] = useState(0);
    let recipeQuery = useGetOneRecipe(id);

    return (
        <>
            {recipeQuery.isFetched && (
                <>
                    <h1 style={{ textAlign: 'center' }}>{recipeQuery.data.name}</h1>

                    <Container sx={{ display: 'flex' }}>
                        <img style={{ width: 500, height: 500 }} src={recipeQuery.data.image} />

                        <Container >
                            <Rating name="read-only" value={recipeQuery.data.rating} onChange={(event, newValue) => setValue(newValue)} />
                            {recipeQuery.data.ingredients.map((ing, index) =>
                                <ListItem key={index}><span>*</span> {ing}</ListItem>
                            )}
                        </Container>

                    </Container>

                    <Container>
                        {recipeQuery.data.instructions.map((ins, index) =>
                            <ListItem key={index}><span>{`${index + 1}. `}</span> {ins}</ListItem>
                        )}
                    </Container>
                </>
            )}
        </>
    )
}