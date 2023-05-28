import React from 'react';
import CarsApiItem from "./CarsApiItem";

const CarsApi = ({cars}) => {
    return (
        <div>
            <div className="car_off">
                <div className="car_bst">БЕСТСЕЛЛЕРЫ:</div>
                <div className="spisok_car">
                    {cars.map((car) =>
                        <CarsApiItem car={car} key={car.id}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarsApi;