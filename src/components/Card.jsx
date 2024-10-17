import React from 'react';
import caki from '../assets/caki.jpg'; 
import dtb from '../assets/dtb.jpg'; 
import baptism from '../assets/baptism.jpg'; 
import CakeCard from './CakeCard'; 
import '../landing.css';
function LandingPage() {
    return (
        <>
       <header className="header-background text-center mt-4">
                <h1>Welcome to TheCakePeople – Bite into Bliss!</h1>
                <div className="background-opacity">
                <p>
                    We take pride in crafting exquisite cakes, from birthdays to weddings,<br></br>and other ceremonies using the finest ingredients 
                    to ensure every<br></br> bite is pure bliss. Whether you're looking for a classic flavor or<br></br> a unique design,
                    we’re here to turn your sweet dreams into reality.<br></br> Let us help you make your next event unforgettable 
                    with cakes that<br></br> are as beautiful as they are delicious.
                </p>
                <p>
                   <strong>Stop by or place an order today and bite into bliss with every slice!</strong> 
                </p>
                </div>
            </header>
            <div class="cake">
            <h1>Our Cakes</h1>
           </div>
            <div className="container text-center mt-4">
                <div className="row">
                    <div className="col">
                        <CakeCard image={caki} title="Custom Cakes" description="." />
                    </div>
                    <div className="col">
                        <CakeCard image={dtb} title="Birthday Cakes" description="." />
                    </div>
                    <div className="col">
                        <CakeCard image={baptism} title="Baptism Cakes" description="." />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
