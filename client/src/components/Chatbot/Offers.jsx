import React from "react";

const Offers = (props) => {

    const { offers } = props;

    return (
        <div>
            {offers.map((offer, index) => {
                return (
                    <div key={index}>
                        <h3>{offer.title}</h3>
                        <p>{offer.description}</p>
                        <p>{offer.price}</p>
                        Offers
                    </div>
                );
            })}
        </div>
    );
};
export default Offers;