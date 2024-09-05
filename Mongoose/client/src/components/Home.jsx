import React from 'react';
import { Carousel } from 'antd';
let contentStyle = {
    margin: 'auto',
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function Home() {
    let onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel autoplay afterChange={onChange}>
            <div>
                <img style={contentStyle} src={'/images/christine-roy-ir5MHI6rPg0-unsplash.jpg'} alt="" />
            </div>
            <div>
                <img style={contentStyle} src={'/images/jonathan-gallegos-_vA2q0-NroU-unsplash.jpg'} alt="" />
            </div>
            <div>
                <img style={contentStyle} src={'/images/nils-nedel-ONpGBpns3cs-unsplash.jpg'} alt="" />
            </div>
            <div>
                <img style={contentStyle} src={'/images/roman-kraft-g_gwdpsCVAY-unsplash.jpg'} alt="" />
            </div>
        </Carousel >
    );
};