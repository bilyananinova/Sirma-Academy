import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input } from 'antd';

import { login } from '../../services/userServices';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
    let authContext = useContext(AuthContext);
    let [user, setUser] = useState({});
    let navigate = useNavigate();

    let onFinish = async (values) => {
        // console.log('Success:', values);
        setUser(await login(values.username, values.password));
    };

    let onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if (user._id) {
            authContext.authUser(user);
            navigate('/home');
        }
    }, [user]);

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Login Page</h1>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
};