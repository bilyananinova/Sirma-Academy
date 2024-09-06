import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Card } from 'antd';
import { Image } from 'antd';

import { AuthContext } from '../../contexts/AuthContext';
import { deleteOne } from '../../services/postService';
import { useGetOnePost } from '../../queries/useGetOnePost';
import { useDeletePost } from '../../queries/useDeletePost';

export default function PostDetails() {
    let { id } = useParams();
    let post = useGetOnePost(id);
    let deletePost = useDeletePost(id);
    let user = useContext(AuthContext);
    let userId = user.userContext._id;
    let navigate = useNavigate();

    async function deleteHandler() {
        deletePost.mutate(id);
        navigate('/blog');
    }

    return (
        <>
            <div style={{ width: 600, margin: 'auto' }}>

                <Image
                    src={post.data.image}
                />
                <Card title={post.data.title} bordered={false} >
                    <p>{post.data.content}</p>
                </Card>

                {post.data.author == userId
                    ?
                    <>
                        <Button type="primary" htmlType="a" style={{ marginRight: 10 }} href={`/blog/${post.data._id}/edit`}>
                            Edit
                        </Button>
                        <Button type="primary" onClick={deleteHandler}>
                            Delete
                        </Button>
                    </>
                    : null
                }

            </div>
        </>
    )
};
