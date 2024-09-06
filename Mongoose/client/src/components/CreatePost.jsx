import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Button, Form, Input, } from 'antd';

import { create } from '../../services/postService';
import { AuthContext } from '../../contexts/AuthContext';
import { postKeys } from '../../queries/postsKeys';

let { TextArea } = Input;

export default function CreatePost() {
    let queryClient = useQueryClient();
    let user = useContext(AuthContext);
    let userId = user.userContext._id;
    let navigate = useNavigate();

    let createHandler = useMutation({
        mutationFn: create,
        mutationKey: postKeys.create(),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: postKeys.all(),
                exact: true
            })
        }
    })

    async function onFinish(values) {
        createHandler.mutate({ ...values, author: userId });
        navigate('/blog');
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
                createhandler={createHandler}
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