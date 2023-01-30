const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-intro">
                <h3>Hello, I'm</h3>
                <h1>Joenell Alonzo</h1>
                <h5>A Software Engineer From <span>Pampanga, Philippines</span></h5>
                <p>I am passionate about building dynamic and functional web applications using RESTful API integration.</p>
                <div className="social">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-instagram'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                </div>
                <a href="#" className="btn-md-purple">About</a>
            </div>
            <div className="home-profile">
                <img src="images/profile2.png" alt="profile" />
            </div>
        </section>
    );
}

export default Home;
