import { Link, useNavigate } from 'react-router-dom'
import { login, register } from '../../services/users';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    let navigate = useNavigate();
    let authContext = useContext(AuthContext);

    function loginHandle(e) {
        e.preventDefault();

        login(e.target.username.value, e.target.password.value)
            .then(res => {
                if (res.token) {
                    authContext.loginUser(res);
                    navigate('/');
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function registerHandle(event) {
        event.preventDefault();

        if (event.target.password.value === event.target.repeatPassword.value) {
            register(event.target.username.value, event.target.email.value, event.target.phone.value, event.target.password.value)
                .then(user => {
                    if (user) {
                        authContext.loginUser(user);
                        navigate('/');
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <>
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/product-list">Products</Link></li>
                        <li className="breadcrumb-item active">Login & Register</li>
                    </ul>
                </div>
            </div>

            <div className="login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <form className="register-form" onSubmit={registerHandle}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                        <input className="form-control" type="text" placeholder="Username" name='username' />
                                    </div>
                                    <div className="col-md-6">
                                        <label>E-mail</label>
                                        <input className="form-control" type="text" placeholder="E-mail" name='email' />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Mobile No</label>
                                        <input className="form-control" type="text" placeholder="Mobile No" name='phone' />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input className="form-control" type="text" placeholder="Password" name='password' />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Retype Password</label>
                                        <input className="form-control" type="text" placeholder="Password" name='repeatPassword' />
                                    </div>
                                    <div className="col-md-12">
                                        <input type='submit' className="btn" readOnly="Submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <form className="login-form" onSubmit={loginHandle}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>E-mail / Username</label>
                                        <p>For example: <span style={{ color: 'red' }}>emilys</span></p>
                                        <input className="form-control" type="text" name="username" placeholder="E-mail / Username" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <p>For example: <span style={{ color: 'red' }}>emilyspass</span></p>
                                        <input className="form-control" type="text" name="password" placeholder="Password" />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="newaccount" />
                                            <label className="custom-control-label" htmlFor="newaccount">Keep me signed in</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <input type='submit' className="btn" readOnly="Submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}