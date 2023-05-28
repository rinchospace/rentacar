import React, {Component, useEffect, useState} from 'react'
import Pop_up from '../Components/Pop_up';
import Todo from '../Components/Todo';
import {Container} from "react-bootstrap";
import '../Styles/Wishl.css';

import bst1 from '../images/bst1.png';
import bst2 from '../images/bst2.png';
import bst3 from '../images/bst3.png';
import fon from "../images/head.jpg";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import {useFetching} from "../Hooks/useFetching";
import CarsService from "../Components/Api/CarService";
import CarsApi from "../Components/CarsApi";

const Wish_List = () => {
    const [cars, setCars] = useState([])
    const [fetchCars, isCarsLoading, carsError] = useFetching(async () => {
        const cars = await CarsService.getAll()
        setCars(cars)
    })

    useEffect(() => {
        fetchCars()
    }, [])
        return (
            <>
                <Container className='main'>
                    <div className="headblock">
                        <div className="cars"
                             style={{backgroundImage: `url(${fon})`, backgroundRepeat: 'no-repeat', width: '65%'}}>
                            <div className="chasto">
                                <h1 className="chasto1">Рекомендованные машины</h1>
                            </div>
                            <div className="car camry">
                                <div className="txt camrytxt">
                                    <h1>TOYOTA CAMRY</h1>
                                </div>
                                <img src={p1} alt="" className="pic1"/>
                            </div>
                            <div className="car bmw">
                                <div className="txt bmwtxt">
                                    <h1>BMW X5</h1>
                                </div>
                                <img src={p2} alt="" className="pic2"/>
                            </div>
                            <div className="car chevr">
                                <div className="txt chevrtxt">
                                    <h1>CHEVROLET CAMARO</h1>
                                </div>
                                <img src={p3} alt="" className="pic3"/>
                            </div>
                            <div className="car tesla">
                                <div className="txt teslatxt">
                                    <h1>TESLA MODEL S</h1>
                                </div>
                                <img src={p4} alt="" className="pic4"/>
                            </div>
                            <div className="car mers">
                                <div className="txt merstxt">
                                    <h1>Mercedes-Benz AMG GT</h1>
                                </div>
                                <img src={p5} alt="" className="pic5"/>
                            </div>
                        </div>
                    </div>

                    <div className="container-title">
                        <h1><b>Составьте список ваших лучших машин:</b></h1>
                    </div>

                    <Todo/>

                    <div className="car_off">
                        <div className="car_bst">ВЫБЕРИТЕ СЕБЕ МАШИНУ:</div>
                        <div className="spisok_car">
                            <div className="kartin_car"><img src={bst1} className="opred_car"/></div>
                            <div className="kartin_car"><img src={bst2} className="opred_car"/></div>
                            <div className="kartin_car"><img src={bst3} className="opred_car"/></div>
                        </div>
                        <div className='buttons'>
                            <Pop_up name='Hyundai I30'/>
                            <Pop_up name='Chevrolet TrailBlazer'/>
                            <Pop_up name='Cadillac Escalade'/>
                        </div>
                    </div>


                    {
                        carsError && <div className="load">${carsError}</div>
                    }
                    {
                        cars.length ? <CarsApi cars={cars}/> : <div className="f_games">Нет свободных машин:(</div>
                    }


                    <div>
                        <h1>Возрастные ограничения и условия трудоустройства:</h1>
                        <p>1. Клиент должен быть старше 21 года;
                            <br/>2. Водительский стаж должен составлять не менее 3-х лет.
                            <br/> -------------------------------
                            <br/>*Если водитель не соответствует этим требованиям, компания может предложить увеличить сумму
                            депозита.</p>
                    </div>

                    <div>
                        <h1>Перечень необходимых документов:</h1>
                        <p>1. Паспорт;
                            <br/>2. Водительское удостоверение с правом управления транспортным средством соответствующей категории.
                            <br/>-------------------------------
                            <br/>*Для заключения договора аренды иностранец должен предоставить национальный паспорт и
                            международные права или водительское удостоверение, в которых указаны имя и фамилия
                            латинскими буквами.</p>
                    </div>

                    <div>
                        <h1>Способы оплаты:</h1>
                        <p>1. Оплата наличными;
                            <br/>2. Банковский перевод.
                            <br/>-------------------------------
                            <br/>*Оплата за аренду автомобиля производится перед поездкой. Клиент вносит предоплату
                            на весь срок аренды. Если вы хотите продолжить аренду, вам также необходимо оформить
                            предоплата. Если автомобиль возвращается за несколько дней до окончания срока аренды,
                            оплата пересчитывается исходя из фактического времени пользования автомобилем.</p>
                    </div>

                    <div>
                        <h1>Депозит:</h1>
                        <p>1. Сумма залога зависит от класса автомобиля;
                            <br/>2. Залог возвращается после проверки видео на предмет нарушений правил дорожного движения.
                            <br/>-------------------------------
                            <br/>*Проверка может занять до недели (если автомобиль использовался в городе), до двух недель (если
                            автомобиль выехал за пределы города).</p>
                    </div>

                    <div>
                        <h1>Какой вид топлива я должен использовать?</h1>
                        <p>Во избежание поломок автомобилей компания настоятельно рекомендует заправляться только в официальных
                            машина
                            заправочные станции с Sinooil 95, самодельным маслом, Helios, Газпромнефть, Royal Petrol 95
                            бензин.</p>
                    </div>

                    <div>
                        <h1>Требования к пробегу</h1>
                        <p>Ежедневный пробег составляет 200 км.</p>
                    </div>

                    <div>
                        <h1>Территория передвижения</h1>
                        <p>Клиенты нашей компании имеют право свободно пользоваться арендованными автомобилями в городах Алматы и
                            Астана.
                            Также индивидуально возможны поездки как по территории Казахстана, так и за рубеж
                            (близлежащие границы с
                            Казахстаном). Наши менеджеры расскажут вам об этом подробнее.</p>
                    </div>

                    <div>
                        <h1>Срок аренды:</h1>
                        <p>Минимальный срок аренды составляет 24 часа.
                            <br/>-------------------------------
                            <br/>*Началом срока аренды считается момент подписания акта приема-передачи
                            и передача транспортного средства. Автомобиль должен быть возвращен не позднее, чем через 1 час после окончания
                            последнего дня аренды. За задержку с возвратом автомобиля взимается арендная плата за
                            дополнительный день аренды.</p>
                    </div>

                    <div>
                        <h1>Условия страхования:</h1>
                        <p>Каждый автомобиль компании "RENTCARS" застрахован по обязательному страхованию. Обязательное
                            страхование гражданской ответственности владельцев транспортных средств.</p>
                    </div>

                </Container>
            </>
        )
}

export default Wish_List;
