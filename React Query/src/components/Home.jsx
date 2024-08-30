import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Home() {

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Welcome</h1>
            
            <Card sx={{ width: '80%', p: 2, m: 5, mx: 'auto' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="500"
                        image="/images/pablo-merchan-montes-0nT08Z-MhiE-unsplash.jpg"
                        alt=""
                    />
                </CardActionArea>
            </Card>
        </>
    );
}