import React, { Component } from 'react';
import '../Styles/Contact.css';

import p1 from '../images/p1.png';

export default class Contacts extends Component {
    render() {
        return (
            <>
                <main>
                    <div className="name_logo">
                        <div>
                            <h1 className="name ash">Мы расположены по данному адресу:</h1>
                            <div className="frdivst">
                                <a className='aframe1' href="https://yandex.kz/maps/org/1016114729/?utm_medium=mapframe&utm_source=maps">Международный университет информационных технологий</a>
                                <a className='aframe2' href="https://yandex.kz/maps/162/almaty/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps">ВУЗ в Алматы</a>
                                <iframe src="https://yandex.kz/map-widget/v1/-/CCUZBSSMXC" width="720" height="400" frameborder="0" allowfullscreen="true" title="myFrame" className='frame'></iframe>
                            </div>
                            <h3>Алматы, Улица Манаса 34а</h3>
                        </div>
                        <div className="logo"> <img src={p1} alt="" /> </div>
                    </div>

                    <h1 className="name ash fs">Связаться с нами:</h1>
                    <p>E-mail: reception@iitu.edu.kz</p>
                    <p>Номер Телефона: +7 (727) 320 00 00</p>
                    </main>
            </>
        )
    }
}
