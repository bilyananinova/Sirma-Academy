import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, } from 'antd';

import { create } from '../../services/postService';
import { AuthContext } from '../../contexts/AuthContext';

let { TextArea } = Input;

export default function CreatePost() {
    let user = useContext(AuthContext);
    let userId = user.userContext._id;
    let navigate = useNavigate();

    async function onFinish(values) {
        let post = await create({ ...values, author: userId });

        if (post._id) {
            navigate('/blog');
        }
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Ceate Post</h1>

            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600, margin: 'auto' }}
                name="basic"

                onFinish={onFinish}
            >
                <Form.Item name="title" label="Title">
                    <Input />
                </Form.Item>

                <Form.Item name="content" label="Content">
                    <TextArea rows={10} />
                </Form.Item>

                <Form.Item name="image" label="Image">
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ margin: 'auto' }}
                    >
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
};