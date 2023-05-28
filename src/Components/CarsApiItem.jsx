import React from 'react';
import bst1 from "../images/bst1.png";
import Pop_up from "./Pop_up";

const CarsApiItem = (props) => {
    return (
        <div className="car_block">
            <div className="kartin_car"><img src={props.car.image} className="opred_car"/></div>
             <p>{props.car.name}</p>
            <p>{props.car.year} год</p>
            <p>{props.car.volume} литров</p>
            <p>{props.car.price}₸</p>
        </div>
    );
};

export default CarsApiItem;