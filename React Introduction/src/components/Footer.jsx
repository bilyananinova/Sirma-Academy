export default function Footer() {

    return (
        <>
            <footer className="footer text-center">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-md-offset-3 col-md-6 text-center">
                            <div className="widget">
                                <h4 className="widget-title">Delicious</h4>
                                <address>324 Ellte Road<br />Delhi, DL 110013</address>
                                <div className="social-list">
                                    <a href="#">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                    <a href="#">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                </div>
                                <div className="copyright clear-float">
                                    © Delicious Theme. All Rights Reserved
                                    <div className="credits">
                                        {/* <!--
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Delicious
            --> */}
                                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}