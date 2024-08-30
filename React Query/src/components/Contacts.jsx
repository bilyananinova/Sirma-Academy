import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';

export default function Contacts() {

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Contacts</h1>

            <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: 1000, m: 'auto', display: 'flex' }}>


                <img style={{ width: '50%' }} src='/images/super-snapper-t4NNQyv09Sw-unsplash.jpg' />

                <Box component="form" sx={{ display: 'flex', background: 'silver', width: '50%', m: 'auto', flexWrap: 'wrap' }}>
                    
                    <Box sx={{ display: 'flex', flexGrow: 1 }}>
                        <TextField label="First name" variant="outlined" sx={{ width: '50%', m: 1, background: 'white' }} />
                        <TextField label="Last name" variant="outlined" sx={{ width: '50%', m: 1, background: 'white' }} />
                    </Box>
                    
                    <TextField label="Email" variant="outlined" sx={{ width: '100%', m: 1, background: 'white' }} />
                    <Textarea placeholder="Message" minRows={5} variant="outlined" sx={{  background: 'white', width: '100%', m: 1 }} />

                    <Button type="submit" sx={{ m: 'auto', p: 1 }}>Submit</Button>
                </Box>
            </Box >
        </>
    );
}
