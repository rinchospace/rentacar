import React, { Component } from 'react'
import p1 from '../images/p1.png';

export default class Contacts extends Component {
    render() {
        return (
            <>
                <style type='text/css'>
                    {`
                    main{
                        padding-right: 20%;
                        padding-left: 20%;
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background-color: rgb(250, 250, 250);
                    }
                    .frame{
                        position:relative;
                    }
                    .aframe1
                    {
                        color:#eee;
                        font-size:12px;
                        position:absolute;
                        top:0px;
                    }
                    .aframe2{
                        color:#eee;
                        font-size:12px;
                        position:absolute;
                        top:14px;
                    }
                    .frdivst{
                        position:relative;
                        overflow:hidden;
                        width: 720px;
                        height: 400px;
                        margin: 20px
                    }
                    .name_logo{
                        display: flex;
                        justify-content: space-around;
                        align-content: center;
                        margin-bottom: 50px;
                        color: var(--p);
                    }
                    .logo{
                        display: flex;
                        align-items: center;
                    }
                    .fs{
                        font-Size: 70px;
                    }
                }
            `}
                </style>
                <main>
                    <div>
                        <h1>Rent a car in Kazakhstan</h1>
                        <p>"R&R cars" is a company that does not just rent cars for rent Almaty and Astana. In organizing our
                            business, we took into account the many years of experience of the world-famous procurers and adapted it
                            to the specifics, needs and mentality of our clients. We have turned rental of cars in Kazakhstan from
                            expensive services into accessible and understandable for all people.
                            By putting the maximum service at the top of the corner, we now offer rental cars on the most attractive
                            and favorable conditions. Here you can rent a car without a driver and do not feel any restrictions when
                            traveling
                        </p>
                    </div>

                    <div className="camry">
                        <img src={p1} alt="" />
                    </div>


                    <div>
                        <h1>Advantages and key points:</h1>
                    </div>

                    <div>
                        <h2>List of required documents</h2>
                        <p>To rent a car, a citizen of Kazakhstan will need a passport and a driver's license with the right to
                            drive a vehicle of the appropriate category.

                            To conclude a rental agreement, a foreigner must provide a national passport and international rights or
                            a driver's license, in which the name and surname are indicated in Latin letters.</p>
                    </div>

                    <div>
                        <h1>Payment Methods</h1>
                        <p>For the convenience of customers, we offer various payment methods, including by bank transfer, or by
                            plastic card. Payment can also be made in cash and by bank transfer.

                            Payment for renting a car is made before the trip. The client pre-pays the full term of the lease. If
                            you wish to continue the rental, you must also make an advance payment. In the case of returning the car
                            a few days before the end of the rental period, payment is recalculated based on the actual time of use
                            of the car.</p>
                    </div>

                    <div>
                        <h1>Pledge</h1>
                        <p>Together with the rental payment, the client is obliged to make a deposit (deposit) for the car. It can
                            be paid in cash or by credit card. The size of the deposit depends on the class of the car.

                            The deposit is returned after checking the video recording for traffic violations. The check can take up
                            to a week (if the car was used in the city), up to two weeks (if the car went outside the city)</p>
                    </div>

                    <div>
                        <h1>What fuel to use?</h1>
                        <p>In order to avoid car breakdowns, the company strongly recommends refueling only at official car
                            refueling stations with Sinooil 95, Homad Oil, Helios, Gazpromneft, Royal Petrol 95 gasoline.</p>
                    </div>

                    <div>
                        <h1>Mileage requirements</h1>
                        <p>The daily mileage is 200 km.</p>
                    </div>

                    <div>
                        <h1>Territory of movement</h1>
                        <p>Customers of our company have the right to freely use leased cars in the city of Almaty and Astana. It is
                            also individually possible trips across the territory of Kazakhstan as well as abroad (nearby borders to
                            Kazakhstan). Our managers will tell you more about it.</p>
                    </div>

                    <div>
                        <h1>Who can drive a rented vehicle?</h1>
                        <p>Only a driver who has a certificate confirming the right to drive a car of this category has the right to
                            drive a rented car.

                            The company can write a car control up to 3 drivers for free.</p>
                    </div>

                    <div>
                        <h1>Rental period</h1>
                        <p>The minimum rental period is 24 hours. The starting point of the lease term is considered to be the
                            moment of signing of the vehicle transfer and acceptance certificate.

                            The car must be returned no later than 1 hour after the end of the last day of hire. For the delay in
                            returning the car, there is a rent for an additional day of hire.</p>
                    </div>

                    <div>
                        <h1>Insurance Terms</h1>
                        <p>Each car of the "R&R cars" company is insured under compulsory insurance. Compulsory insurance of civil
                            liability of vehicle owners.</p>
                    </div>

                </main>
            </>
        )
    }
}
