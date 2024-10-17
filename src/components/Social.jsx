import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import '../social.css'; // Adjust the path as necessary

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <p><FontAwesomeIcon icon={faPhone} /> 0781960986</p>
            <p><FontAwesomeIcon icon={faEnvelope} />thecakepeople@gmail.com</p>
            <p><FontAwesomeIcon icon={faLocationPin} /> Lira, Uganda</p>
        </div>
    );
};

export default ContactInfo;
