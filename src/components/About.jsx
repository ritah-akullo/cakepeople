// src/components/About.jsx
import React, { useEffect, useState } from 'react';
import allan from '../assets/allan.jpg';
import '../About.css';
import '../services.css';
function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.description');
            const rect = aboutSection.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                setIsVisible(true); // Set visible when in view
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    }, []);

    return (
        <div className="about-container text-center mt-5">
            <h1 style={{fontFamily: 'Times,New Roman, Times, Serif' }} >About Us</h1>

            <div className={`description ${isVisible ? 'visible' : ''}`}>
                <p>
                    Welcome to <strong>The Cake People</strong>! Founded by a passionate baker, Allan YAPETH EKII,<br />
                    we believe in crafting cakes that turn moments into unforgettable memories.
                </p>

                {/* Mission and Vision */}
                <div className="mission-vision mt-4">
                    
                    <p><strong>Mission:<br></br></strong> To create cakes that turn moments into memories, one slice at a time.</p>
                    <p><strong>Vision:<br></br></strong> Every slice of cake is a masterpiece that brings joy and happiness to our guests.</p>
                </div>
            </div>
                {/* Values */}
                <h1 style={{fontFamily: 'Times,New Roman, Times, Serif', color: '#333',}}>Our Values</h1>
                <div className="circle-paragraph">
                <strong style={{ marginLeft: '40px' }}>Quality Ingredients:<br></br></strong> <p>We use only premium ingredients to ensure that every bite is delicious.</p>
                    <strong>Craftsmanship:<br></br></strong><p> Our cakes are handcrafted works of art, meticulously designed and baked to perfection.</p>
                    <strong>Customer Experience:<br></br></strong> <p>We pride ourselves on providing personalized service, ensuring every customer gets a cake that exceeds their expectations.</p>
                </div>
             {/* Services */}
             <div className="services mt-4">
                <h1 style={{fontFamily:'Times,New Roman, Times, Serif'}}>Our Services</h1>
                <p>
                    <strong>Custom Cakes:<br></br></strong> We specialize in custom cakes for all occasions, from elegant weddings to fun birthdays and corporate events.<br />
                    <strong>Special Dietary Needs:<br></br></strong> We offer a range of dietary-friendly options, ensuring everyone can enjoy our cakes, regardless of restrictions.
                </p>
            </div>

            {/* Our Team */}
            <div className="team mt-4">
                <h5 style={{fontFamily: 'Times,New Roman, Times, Serif', color: '#333',}}>Our Team</h5>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={allan} alt="Allan YAPETH EKII" />
                            <div className="card-body" style={{fontFamily: 'Times,New Roman, Times, Serif', color: '#333',}}>
                                <h5 className="card-title"><strong>Allan Yapeth Ekii</strong></h5>
                                <p className="card-text">Baker, passionate about creating beautiful cakes. He loves sharing his joy for baking with others.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
