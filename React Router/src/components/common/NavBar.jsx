import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function NavBar() {
    let { isLogged } = useContext(AuthContext);

    return (
        <>
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-envelope"></i>
                            support@email.com
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-phone-alt"></i>
                            +012-345-6789
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <Link to="/" className="navbar-brand">MENU</Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/product-list" className="nav-item nav-link">Products</Link>
                                {
                                    isLogged &&
                                    <>
                                        <Link to="/cart" className="nav-item nav-link">Cart</Link>
                                        <Link to="/my-account" className="nav-item nav-link">My Account</Link>
                                    </>
                                }

                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</Link>
                                    <div className="dropdown-menu">
                                        <Link to="/login-register" className="dropdown-item">Login & Register</Link>
                                        <Link to="/contact" className="dropdown-item">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-nav ml-auto">
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</Link>
                                    <div className="dropdown-menu">
                                        <Link to="/login" className="dropdown-item">Login</Link>
                                        <Link to="/register" className="dropdown-item">Register</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <Link to="/">
                                    <img src="img/logo.png" alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <Link to="/cart" className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>(0)</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}