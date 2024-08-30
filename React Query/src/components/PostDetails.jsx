import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useGetSinglePost } from '../queries/postsQueries';
import { AuthContext } from '../contexts/AuthContext';
import { deletePost } from '../services/postsServices';

export default function PostDetails() {
    let { id } = useParams();
    let user = useContext(AuthContext);
    let postQuery = useGetSinglePost(id);
    let navigate = useNavigate();
    let isAuthor = user.auth.id === postQuery.data.userId;

    function handleDelete() {
        if (deletePost) {
            navigate('/posts');
        }
    }

    return (
        <>
            {postQuery.isFetched && (
                <>
                    <Container sx={{ mt: 10 }}>
                        <Card sx={{ maxWidth: 450, m: 'auto' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {postQuery.data.title}
                                </Typography>

                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {postQuery.data.body}
                                </Typography>
                                <br />
                                <Typography variant="subtitle1" color="text.secondary" display={'flex'} justifyContent={'flex-end'}>
                                    likes: {postQuery.data.reactions.likes},
                                    dislikes: {postQuery.data.reactions.dislikes},
                                    views: {postQuery.data.views}
                                </Typography>
                            </CardContent>

                            {isAuthor && (
                                <CardActions>
                                    <Button size="small" component={Link} to={`/posts/edit/${id}`}>Edit</Button>
                                    <Button size="small" onClick={handleDelete}>Delete</Button>
                                </CardActions>
                            )}
                        </Card>
                    </Container>
                </>
            )}
        </>
    )
}