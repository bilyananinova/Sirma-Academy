import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HomeFilled, LoginOutlined, EditOutlined, ReadOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

let items = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeFilled />,
        path: '/home'
    },
    {
        label: 'Blog',
        key: 'blog',
        icon: <ReadOutlined />,
        path: '/blog'
    },
    {
        label: 'Create Post',
        key: 'create-post',
        icon: <EditOutlined />,
        path: '/create-post'
    },
    {
        label: 'Login',
        key: 'login',
        icon: <LoginOutlined />,
        path: '/login'
    },
    {
        label: 'Register',
        key: 'register',
        icon: <LoginOutlined />,
        path: '/register'
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: <LogoutOutlined />,
        path: '/logout'
    },

];


export default function Header() {
    let [current, setCurrent] = useState('home');
    let navigate = useNavigate();

    let onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(e.key)
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};