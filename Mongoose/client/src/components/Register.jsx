import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input } from 'antd';

import { register } from '../../services/userServices';
import { AuthContext } from '../../contexts/AuthContext';

export default function Register() {
    let authContext = useContext(AuthContext);
    let [user, setUser] = useState({});
    let navigate = useNavigate();

    let onFinish = async (values) => {
        // console.log('Success:', values);

        if (values.password !== values.rePassword) {
            console.log(`Passwords don't match`);
            return;
        }

        setUser(await register(values.username, values.email, values.password));
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
            <h1 style={{ textAlign: 'center' }}>Register Page</h1>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                    autoComplete="off"
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
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
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
                        label="Repeat Password"
                        name="rePassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please repeat your password!',
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