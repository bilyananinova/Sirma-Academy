import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';

import { AuthContext } from '../contexts/AuthContext';
import { useCreatePost } from '../queries/postsQueries';

export default function CreatePost() {
    let user = useContext(AuthContext);
    let navigate = useNavigate();



    function handlePost(e) {
        e.preventDefault();
        let data = new FormData(e.currentTarget);

        console.log({
            title: data.get('title'),
            body: data.get('body'),
            userId: user.auth.id
        });

        useCreatePost.mutate({
            title: data.get('title'),
            body: data.get('body'),
            userId: user.auth.id
        });

        console.log(useCreatePost);
        
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Create Post</h1>

            <Box component="form" sx={{ p: 2, width: 900, m: 'auto' }} onSubmit={handlePost}>

                <TextField name="title" label="Title" variant="outlined" sx={{ width: '100%', m: 1 }} />
                <Textarea name='body' placeholder="Content" minRows={5} variant="outlined" sx={{ width: '100%', m: 1 }} />

                <Button type="submit" sx={{ background: 'silver', p: 1, m: 1, width: 100 }}>Submit</Button>
            </Box>
        </>
    )
}