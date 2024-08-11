export default function Banner() {
    return (
        <>
            <section id="banner">
                <div className="bg-color">
                    <header id="header">
                        <div className="container">
                            <div id="mySidenav" className="sidenav">
                                <a href="/" className="closebtn">&times;</a>
                                <a href="#about">About</a>
                                <a href="#event">Event</a>
                                <a href="#menu-list">Menu</a>
                                <a href="#contact">Book a table</a>
                            </div>
                            {/* <!-- Use any element to open the sidenav --> */}
                            <span className="pull-right menu-icon">☰</span>
                        </div>
                    </header>
                    <div className="container">
                        <div className="row">
                            <div className="inner text-center">
                                <h1 className="logo-name">Delicious</h1>
                                <h2>Food To fit your lifestyle & health.</h2>
                                <p>Specialized in Indian Cuisine!!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}