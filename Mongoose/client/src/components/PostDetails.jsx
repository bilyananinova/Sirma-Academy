import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Card } from 'antd';
import { Image } from 'antd';

import { AuthContext } from '../../contexts/AuthContext';
import { getOne, deleteOne } from '../../services/postService';

export default function PostDetails() {
    let [post, setPost] = useState({});
    let user = useContext(AuthContext);
    let userId = user.userContext._id;
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        async function fetch() {
            let result = await getOne(id);
            setPost(result);
        }
        fetch()
    }, []);

    async function deleteHandler() {
        let res = await deleteOne(id);
        if (res) {
            navigate('/blog');
        }

    }

    return (
        <>
            <div style={{ width: 600, margin: 'auto' }}>

                <Image
                    src={post.image}
                />
                <Card title={post.title} bordered={false} >
                    <p>{post.content}</p>
                </Card>

                {post.author == userId
                    ?
                    <>
                        <Button type="primary" htmlType="a" style={{ marginRight: 10 }} href={`/blog/${post._id}/edit`}>
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
