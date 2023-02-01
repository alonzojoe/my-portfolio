import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {

    const ref = useRef(null)


    useEffect(()=> {
        gsap.to(ref.current, { opacity: 1 , x: 0, duration: .5})
    }, [])

    return (
        <>
        <section className="home" id="home">
            <div ref={ref}  className="home-intro"  style={{ opacity: 0, x: 100}}>
                <h3>Hello, I'm</h3>
                <h1>Joenell Alonzo</h1>
                <h5>A Software Engineer From <span>Pampanga, Philippines 2020</span></h5>
                <p>I am passionate about building dynamic and functional web applications using RESTful API integration.</p>
                <div className="social">
                    <a href="https://www.facebook.com/alonzojoe" target="_blank"><i className='bx bxl-facebook'></i></a>
                    <a href="https://www.instagram.com/joenellalonzo/?hl=en" target="_blank"><i className='bx bxl-instagram'></i></a>
                    <a href="https://ph.linkedin.com/in/joenell-alonzo-4a6129157" target="_blank"><i className='bx bxl-linkedin'></i></a>
                </div>
                <a href="#" className="btn-md-purple">About</a>
            </div>
            <div className="home-profile">
                <img src="images/profile2.png" alt="profile" />
            </div>
        </section>
        <div className="content-container">
            <section className="about-me">
                <div className="title-text">
                    <h2>About</h2>
                </div>
                <div className="about-info">
                    <div className="about-paragraph">
                        <p>Hi, my name is Joe and I am looking for a company where I can continue my career and express my skills in web development.</p>
                        <p>My passion is to build functional web applications using the skills I have self-studied and learned through mentorship.</p>
                        <p>
                        My interest in web development began in 2015, when I was a graduating student in junior high school. Whenever I visited a website, 
                        I was curious about the process behind the user's view, so I chose to study Information Technology in college to learn more about it. 
                        That's where my passion for web development began.
                        </p>
                    </div>
                    <div className="about-paragraph">
                        <h4>Bachelor of Science in Information Technology</h4>
                        <span>Don Honorio Ventura State University</span>
                    </div>
                </div>
            </section>

            <section className="skills">
                <div className="title-text">
                    <h2>Skills</h2>
                    <h3>Technologies and tools that I use in building websites.</h3>
                </div>
                <div className="skill-info">
                    <div className="skill-box">
                        <div className="skill-icon">
                            <img src="images/html-5.svg" alt="svg"/>
                        </div>
                        <span>HTML5</span>
                    </div>
                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/css.svg" alt="svg"/>
                        </div>
                        <span>CSS3</span>
                    </div>
                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/js.svg" alt="svg"/>
                        </div>
                        <span>JavaScript</span>
                    </div>

                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/php.svg" alt="svg"/>
                        </div>
                        <span>PHP</span>
                    </div>
                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/laravel.svg" alt="svg"/>
                        </div>
                        <span>Laravel</span>
                    </div>
                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/bootstrap-5-1.svg" alt="svg"/>
                        </div>
                        <span>Bootstrap</span>
                    </div>
                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/vue.svg" alt="svg"/>
                        </div>
                        <span>VueJS</span>
                    </div>
                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/api-page-svgrepo-com.svg" alt="svg"/>
                        </div>
                        <span>REST API</span>
                    </div>

                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/mysql-logo.svg" alt="svg"/>
                        </div>
                        <span>MySQL</span>
                    </div>
                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/microsoft-sql-server-logo-svgrepo-com.svg" alt="svg"/>
                        </div>
                        <span>SQL Server</span>
                    </div>
                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/postman-icon.svg" alt="svg"/>
                        </div>
                        <span>Postman</span>
                    </div>
                    <div  className="skill-box">
                        <div className="skill-icon">
                            <img src="images/vscode.svg" alt="svg"/>
                        </div>
                        <span>VSCode</span>
                    </div>
                </div>
            </section>
            
            <section className="projects">
                <div className="title-text">
                    <h2>Projects</h2>
                </div>
                <div className="skill-info">
                    <div  className="skill-box">
                        <span>Still Editing the screenshots of my projects</span>
                    </div>
                </div>
            </section>
                    <section className="contact">
                <div className="title-text">
                    <h2>Contact</h2>
                    <h3>Let's build awesome stuffs for you.</h3>
                </div>
                <div className="form-contact"> 
                    <div className="contact-box">
                        <div className="container-info">
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <img src="images/location.svg" alt="svg"/>
                                </div>
                                <span>Pampanga, Philippines 2020</span>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <img src="images/contact.svg" alt="svg"/>
                                </div>
                                <span>(0905)-184-9250</span>
                            </div>
                            <div className="contact-info">
                                <div className="contact-icon">
                                    <img src="images/email.svg" alt="svg"/>
                                </div>
                                <span>alonzojoenell2k15@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-box">
                        <form className="contact-form">
                            <div className="text-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input className="form-text" id="name" type="text"/>
                            </div>
                            <div className="text-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input className="form-text" id="email" type="text"/>
                            </div>
                            <div className="text-group">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input className="form-text" id="subject" type="text"/>
                            </div>
                            <div className="text-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-text" id="message" cols="20" rows="4"></textarea>
                            </div>
                            <div className="text-group">
                                <button type="button" className="btn btn-sm-purple" disabled>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default Home;
