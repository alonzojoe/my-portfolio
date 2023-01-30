import React from 'react';

const Contact = () => {
    return (
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
    );
}

export default Contact;
