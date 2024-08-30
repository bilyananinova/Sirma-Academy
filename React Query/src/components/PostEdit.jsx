import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';

import { useGetSinglePost, useUpdatePost } from '../queries/postsQueries';
import { AuthContext } from '../contexts/AuthContext';

export default function PostEdit() {
    let { id } = useParams();
    let user = useContext(AuthContext);
    let postQuery = useGetSinglePost(id);
    let updateQuery = useUpdatePost(id);
    let navigate = useNavigate();
    let isAuthor = user.auth.id === postQuery.data.userId;
    let userId = user.auth.id

    function handleUpdate(e) {
        e.preventDefault();
        let data = new FormData(e.currentTarget);

        console.log({
            title: data.get('title'),
            body: data.get('body'),
        });

        updateQuery.mutate({
            title: data.get('title'),
            body: data.get('body'),
            userId: user.auth.id
        })

        if (updateQuery.isSuccess) {
            navigate(`/posts/${id}`);
        }

    }


    return (
        <>
            {postQuery.isFetched && (
                <>
                    <Box component="form" sx={{ mt: 10 }} onSubmit={handleUpdate}>
                        <Card sx={{ maxWidth: 450, m: 'auto' }}>
                            <CardContent>
                                <TextField sx={{ width: '100%', m: 'auto', pb: 2 }} name='title' defaultValue={postQuery.data.title} />
                                <Textarea sx={{ width: '100%', m: 'auto' }} name='body' defaultValue={postQuery.data.body} />
                                <br />
                                <Typography variant="subtitle1" color="text.secondary" display={'flex'} justifyContent={'flex-end'}>
                                    likes: {postQuery.data.reactions.likes},
                                    dislikes: {postQuery.data.reactions.dislikes},
                                    views: {postQuery.data.views}
                                </Typography>
                            </CardContent>


                            {isAuthor && (
                                <CardActions>
                                    <Button size="small" type="submit" >Edit</Button>
                                </CardActions>
                            )}
                        </Card>
                    </Box>
                </>
            )}
        </>
    )
}