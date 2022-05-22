import React, { useEffect, useState } from "react";

import "./Card.css";

const Card = () => {
    return (
        <div className="card-container">
            <img
                src={`https://randomuser.me/api/portraits/med/men/47.jpg`}
                alt="USer"
            />
            <h2>Dummy User</h2>
            <p>johndoe@gmail.com</p>
        </div>
    );
};

export default Card;
