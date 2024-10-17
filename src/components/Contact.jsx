import React from 'react';
import '../contact.css';
function Contact() {
    return (
        <div className="contact-container text-center mt-5" style={{fontFamily: 'Times,New Roman, Times, Serif', color: '#333',}}>
            <h1 tyle={{fontstyle: 'italic'}}>Contact Us</h1>
            <p >We’d love to hear from you! Feel free to reach out for custom cake orders or any inquiries.</p>

            {/* Contact Form */}
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkMeOut" />
                    <label className="form-check-label" htmlFor="checkMeOut">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
