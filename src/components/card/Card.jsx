import React from "react";

import "./Card.css";

const Card = ({ data }) => {
    return (
        <>
            {data?.map(({ name, email, picture }) => (
                <div
                    className="card"
                    style={{ width: "18rem" }}
                    key={`${name.first} ${name.last}`}
                >
                    <img
                        src={`${picture.large}`}
                        alt={`${name.title} ${name.first} ${name.last}`}
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <h5 class="card-title">{`${name.title} ${name.first} ${name.last}`}</h5>
                        <p class="card-text">{email}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;
