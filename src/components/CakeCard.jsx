import React from 'react';

const CakeCard = ({ image, title, description }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">View More</a>
            </div>
        </div>
    );
};

export default CakeCard;
