import { useParams, useNavigate } from 'react-router-dom';

import { Button, Form, Input, } from 'antd';

import { useGetOnePost } from '../../queries/useGetOnePost';
import { useUpdatePost } from '../../queries/useUpdatePost';
import { useMutation } from '@tanstack/react-query';
import { update } from '../../services/postService';
import { postKeys } from '../../queries/postsKeys';

let { TextArea } = Input;

export default function EditPost() {
    let { id } = useParams();
    let post = useGetOnePost(id);
    let oldPost = useUpdatePost(id);
    let [form] = Form.useForm();
    let navigate = useNavigate();
  

    function onFinish(values) {
        oldPost.mutate({title: values.title, content: values.content, image: values.image });

        navigate(`/blog/${post.data._id}`);

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
                    title: post.data.title,
                    content: post.data.content,
                    image: post.data.image
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