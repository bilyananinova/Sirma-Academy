import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

export function PostCard({post}) {

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component={Link} to={`/posts/${post.id}`}>
                <Card sx={{ display: 'flex', mb: 5 }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            likes: {post.reactions.likes}, <br />
                            dislikes: {post.reactions.dislikes}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.body}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    )
}