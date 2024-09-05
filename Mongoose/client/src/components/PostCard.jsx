import { Link } from 'react-router-dom';

import { Card, Image } from 'antd';


export default function PostCard({ post }) {

    return (
        <>
            <div style={{ textAlign: 'center' }}>


                <Link to={`/blog/${post._id}`} style={{ textDecoration: 'none' }}>

                    <Image
                        width={800}
                        height={'auto'}
                        src={post.image}
                    />
                    <Card title={post.title} bordered={false} style={{ width: 800, margin: 'auto' }}>
                        <p>{post.content}</p>
                    </Card>
                </Link>
            </div>
        </>
    )
};
