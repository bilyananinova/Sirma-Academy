import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getAllCategories} from '../../services/products'
import { getUser } from '../../services/users';

export default function Home() {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            let result = await getAllCategories();            
            setCategories(result);
        })();
    }, [])

    return (
        <>
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">
                                    {categories.map((cat, i) => {

                                        return (
                                            <li
                                                className="nav-item"
                                                key={i}>

                                                <Link
                                                    className="nav-link"
                                                    to={cat.slug}>{cat.name}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>

                        <div className="col-md-6">
                            <div className="header-slider normal-slider">
                                <div className="header-slider-item">
                                    <img src="img/slider-1.jpg" alt="Slider Image" />
                                    <div className="header-slider-caption">
                                        <p></p>
                                        <Link className="btn" to="/product-list"><i className="fa fa-shopping-cart"></i>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="header-img">
                                <div className="img-item">
                                    <img src="img/category-1.jpg" />
                                    <Link className="img-text" to="/product-list">
                                        <p>Products</p>
                                    </Link>
                                </div>
                                <div className="img-item">
                                    <img src="img/category-2.jpg" />
                                    <Link className="img-text" to="/product-list">
                                        <p>Products</p>
                                    </Link>
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

            <div className="feature">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fab fa-cc-mastercard"></i>
                                <h2>Secure Payment</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-truck"></i>
                                <h2>Worldwide Delivery</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-sync-alt"></i>
                                <h2>90 Days Return</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-comments"></i>
                                <h2>24/7 Support</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}