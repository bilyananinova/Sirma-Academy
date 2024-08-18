import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAll } from '../../services/products'

export default function ProductList() {
    let [products, setProducts] = useState([]);
    let [aside, setAside] = useState([]);
    

    useEffect(() => {
        (async () => {
            let result = await getAll()
            setProducts(result.products);
        })();
        let temp = products.slice(0, 1);
        setAside(temp);
}, [])

return (
    <>

        <div className="breadcrumb-wrap">
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/product-list">Products</Link></li>
                    <li className="breadcrumb-item active">Product List</li>
                </ul>
            </div>
        </div>

        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-view-top">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-search">
                                                <input type="email" defaultValue="Search" />
                                                <button><i className="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {products.map((product) => {
                                return (
                                    <div className="col-md-4" key={product.id}>
                                        <div className="product-item">
                                            <div className="product-title">
                                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                                                <div className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="product-image">
                                                <Link to={`products/${product.id}`}>
                                                    <img src={product.images[0]} alt="Product Image" />
                                                </Link>
                                                <div className="product-action">
                                                    <Link to="#"><i className="fa fa-cart-plus"></i></Link>
                                                    <Link to="#"><i className="fa fa-heart"></i></Link>
                                                    <Link to={`products/${product.id}`}><i className="fa fa-search"></i></Link>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <h3><span>$</span>{product.price}</h3>
                                                <Link className="btn" to=""><i className="fa fa-shopping-cart"></i>Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>


                    <div className="col-lg-4 sidebar">
                        <div className="sidebar-widget category">
                            <h2 className="title">Category</h2>
                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#"><i className="fa fa-female"></i>Fashion & Beauty</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#"><i className="fa fa-child"></i>Kids & Babies Clothes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#"><i className="fa fa-tshirt"></i>Men & Women Clothes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#"><i className="fa fa-mobile-alt"></i>Gadgets & Accessories</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#"><i className="fa fa-microchip"></i>Electronics & Accessories</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="sidebar-widget widget-slider">
                            <div className="sidebar-slider normal-slider">
                                {
                                    aside.map((aside) => {
                                        return (
                                            <div className="product-item" key={aside.id}>
                                                <div className="product-title">
                                                    <Link to={`/products/${aside.id}`}>{aside.title}</Link>
                                                    <div className="ratting">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <div className="product-image">
                                                    <Link to={`/products/${aside.id}`}>
                                                        <img src={aside.images[0]} alt="Product Image" />
                                                    </Link>
                                                    <div className="product-action">
                                                        <Link to="#"><i className="fa fa-cart-plus"></i></Link>
                                                        <Link to="#"><i className="fa fa-heart"></i></Link>
                                                        <Link to={`/products/${aside.id}`}><i className="fa fa-search"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="product-price">
                                                    <h3><span>$</span>{aside.price}</h3>
                                                    <Link className="btn" to=""><i className="fa fa-shopping-cart"></i>Buy Now</Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
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