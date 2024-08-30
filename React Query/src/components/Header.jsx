import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { AuthContext } from '../contexts/AuthContext';

export default function Header() {
    let [value, setValue] = useState(0);
    let user = useContext(AuthContext);
    let navigate = useNavigate();

    let handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function logoutHandle() {
        user.authUser({});
        navigate('/');
    }

    return (
        <>
            <Box sx={{ width: 1, background: 'silver' }}>
                <Tabs value={value}
                    onChange={handleChange}
                    centered>

                    <Tab label="Home" component={Link} to={'/'} />
                    <Tab label="Recipes" component={Link} to={'/recipes'} />
                    <Tab label="Posts" component={Link} to={'/posts'} />

                    {user.auth.id
                        ?
                        [
                            <Tab key={'user-0'} label="Create Post" component={Link} to={'/posts/add'} />,
                            <Tab key={'user-1'} label="User Posts" component={Link} to={`/posts/user/${user.auth.id}`} />,
                            <Tab key={'user-2'} label="Contacts" component={Link} to={'/contacts'} />,
                            <Tab key={'user-3'} label="Logout" component={Link} onClick={logoutHandle} />
                        ]
                        :
                        [
                            <Tab key={'guest-0'} label="Contacts" component={Link} to={'/contacts'} />,
                            <Tab key={'guest-1'} label="Login" component={Link} to={'/login'} />,
                            <Tab key={'guest-2'} label="Register" component={Link} to={'/register'} />
                        ]
                    }
                </Tabs>
            </Box>
        </>
    )
}