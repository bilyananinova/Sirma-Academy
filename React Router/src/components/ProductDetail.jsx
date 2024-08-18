import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSingle } from '../../services/products';

export default function ProductDetail() {
    let id = useParams()
    let [product, setProduct] = useState({});
    let [reviews, setReviews] = useState([]);
    let [image, setImage] = useState('');

    useEffect(() => {
        (async () => {
            let result = await getSingle(id.id)
            setProduct(result);
            setReviews(result.reviews);
            setImage(result.images[0]);
        })();
    }, [])

    return (
        <>
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/product-list">Products</Link></li>
                        <li className="breadcrumb-item active">Product Detail</li>
                    </ul>
                </div>
            </div>

            <div className="product-detail">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="product-detail-top">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <div className="product-slider-single normal-slider">
                                            <img src={image} alt="Product Image" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="product-content">
                                            <div className="title"><h2>{product?.title}</h2></div>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="price">
                                                <h4>Price:</h4>
                                                <p>${product.price}</p>
                                            </div>
                                            <div className="quantity">
                                                <h4>Quantity:</h4>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                    <input type="text" defaultValue="1" />
                                                    <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                                </div>
                                            </div>
                                            <div className="p-size">
                                                <h4>Size:</h4>
                                                <div className="btn-group btn-group-sm">
                                                    <button type="button" className="btn">S</button>
                                                    <button type="button" className="btn">M</button>
                                                    <button type="button" className="btn">L</button>
                                                    <button type="button" className="btn">XL</button>
                                                </div>
                                            </div>
                                            <div className="p-color">
                                                <h4>Color:</h4>
                                                <div className="btn-group btn-group-sm">
                                                    <button type="button" className="btn">White</button>
                                                    <button type="button" className="btn">Black</button>
                                                    <button type="button" className="btn">Blue</button>
                                                </div>
                                            </div>
                                            <div className="action">
                                                <a className="btn" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a>
                                                <a className="btn" href="#"><i className="fa fa-shopping-bag"></i>Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row product-detail-bottom">
                                <div className="col-lg-12">
                                    <ul className="nav nav-pills nav-justified">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="pill" href="#description">Description</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#specification">Specification</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#reviews">Reviews ({reviews.length})</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="description" className="container tab-pane active">
                                            <h4>Product description</h4>
                                            <p>
                                                {product.description}
                                            </p>
                                        </div>
                                        <div id="specification" className="container tab-pane fade">
                                            <h4>Product specification</h4>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>
                                        <div id="reviews" className="container tab-pane fade">
                                            {
                                                reviews.map((review) => {
                                                    return (
                                                        <div className="reviews-submitted" key={review.date}>
                                                            <div className="reviewer">{review.reviewerName} - <span>{review.date}</span></div>
                                                            <div className="ratting">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <p>
                                                                {review.comment}
                                                            </p>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <div className="reviews-submit">
                                                <h4>Give your Review:</h4>
                                                <div className="ratting">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <div className="row form">
                                                    <div className="col-sm-6">
                                                        <input type="text" placeholder="Name" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input type="email" placeholder="Email" />
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <textarea placeholder="Review"></textarea>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <button>Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brand">
                <div className="container-fluid">
                    <div className="brand-slider">
                        <div className="brand-item"><img src="img/brand-1.png" alt="" /></div>
                        <div className="brand-item"><img src="img/brand-2.png" alt="" /></div>
                        <div className="brand-item"><img src="img/brand-3.png" alt="" /></div>
                        <div className="brand-item"><img src="img/brand-4.png" alt="" /></div>
                        <div className="brand-item"><img src="img/brand-5.png" alt="" /></div>
                        <div className="brand-item"><img src="img/brand-6.png" alt="" /></div>
                    </div>
                </div>
            </div>

        </>
    )
}