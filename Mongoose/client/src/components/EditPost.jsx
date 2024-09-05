import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Button, Form, Input, } from 'antd';

import { getOne, update } from '../../services/postService';

let { TextArea } = Input;

export default function EditPost() {
    let [post, setPost] = useState({});
    let { id } = useParams();
    let [form] = Form.useForm();
    let navigate = useNavigate();

    useEffect(() => {
        async function fetch() {
            let result = await getOne(id);
            setPost(result);
        }
        fetch()
    }, []);
    
    async function onFinish(values) {
        let post = await update(values, id);
        
        if (post._id) {
            navigate(`/blog/${post._id}`);
        }
    }


    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Edit Post</h1>

            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600, margin: 'auto' }}
                form={form}
                onFinish={onFinish}

                {...form.setFieldsValue({
                    title: post.title,
                    content: post.content,
                    image: post.image
                })}
            >
                <Form.Item name="title" label="Title" >
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
    )
}