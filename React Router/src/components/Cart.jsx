import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getUserCart } from '../../services/users';

export default function Cart() {
    let authContext = useContext(AuthContext);
    let [cart, setCart] = useState([]);
    let [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            let result = await getUserCart(authContext.id)
            setCart(result.carts);
            setProducts(result.carts.products);
        })();

    }, [])

    return (
        <>

            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/product-list">Products</Link></li>
                        <li className="breadcrumb-item active">Cart</li>
                    </ul>
                </div>
            </div>

            <div className="cart-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-page-inner">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="align-middle">
                                            {
                                                products?.map((product) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <div className="img">
                                                                    <Link href="#"><img src={product.thumbnail} alt="Image" /></Link>
                                                                    <p>{product.title}</p>
                                                                </div>
                                                            </td>
                                                            <td>${product.price}</td>
                                                            <td>
                                                                <div className="qty">
                                                                    <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                                    <input type="text" value={product.quantity} />
                                                                    <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                                                </div>
                                                            </td>
                                                            <td>${product.total}</td>
                                                            <td><button><i className="fa fa-trash"></i></button></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-page-inner">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="coupon">
                                            <input type="text" placeholder="Coupon Code" />
                                            <button>Apply Code</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="cart-summary">
                                            <div className="cart-content">
                                                <h1>Cart Summary</h1>
                                                <p>Grand Total {cart.total
                                                    ? <span>${cart.total}</span>
                                                    : <span>$0</span>}</p>
                                            </div>
                                            <div className="cart-btn">
                                                <button>Update Cart</button>
                                                <button>Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}