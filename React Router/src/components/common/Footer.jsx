import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>


            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Get in Touch</h2>
                                <div className="contact-info">
                                    <p><i className="fa fa-map-marker"></i>123 E Store, Los Angeles, USA</p>
                                    <p><i className="fa fa-envelope"></i>email@example.com</p>
                                    <p><i className="fa fa-phone"></i>+123-456-7890</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Follow Us</h2>
                                <div className="contact-info">
                                    <div className="social">
                                        <Link to="/"><i className="fab fa-twitter"></i></Link>
                                        <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                                        <Link to="/"><i className="fab fa-instagram"></i></Link>
                                        <Link to="/"><i className="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Company Info</h2>
                                <ul>
                                    <li><Link to="/">About Us</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Terms & Condition</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>Purchase Info</h2>
                                <ul>
                                    <li><Link to="/">Pyament Policy</Link></li>
                                    <li><Link to="/">Shipping Policy</Link></li>
                                    <li><Link to="/">Return Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row payment align-items-center">
                        <div className="col-md-6">
                            <div className="payment-method">
                                <h2>We Accept:</h2>
                                <img src="img/payment-method.png" alt="Payment Method" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="payment-security">
                                <h2>Secured By:</h2>
                                <img src="img/godaddy.svg" alt="Payment Security" />
                                <img src="img/norton.svg" alt="Payment Security" />
                                <img src="img/ssl.svg" alt="Payment Security" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 copyright">
                            <p>Copyright &copy; <Link to="https://htmlcodex.com">HTML Codex</Link>. All Rights Reserved</p>
                        </div>

                        <div className="col-md-6 template-by">
                            <p>Template By <Link to="https://htmlcodex.com">HTML Codex</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="#" className="back-to-top"><i className="fa fa-chevron-up"></i></Link>

        </>
    )
}