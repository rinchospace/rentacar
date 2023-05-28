import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import '../Styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <Container className='main'>
          <div className="bigblock">
            <div className="arrow">
              <p><b>О НАС</b></p>
            </div>
          </div>

          <div className="glvniz">
          <div className="cbox">
            <CarouselBox />
          </div>

          <div className="txthome">
            <h2>"RENTCARS" - это компания, которая не просто сдает автомобили в аренду в Алматы и Астане. При организации нашего бизнеса мы учли многолетний опыт всемирно известных поставщиков и адаптировали его к специфике, потребностям и менталитету наших клиентов. Мы превратили прокат автомобилей в Казахстане из дорогостоящей услуги в доступную и понятную для всех людей.</h2>
          </div>
          </div>

          <div className="oznakom">
            <h2><b>Для ознакомления с арендой, пожалуйста посмотрите видео:</b></h2>
          </div>

          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mKci2gErqJo" title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
          </div>
        </Container>
      </>
    )
  }
}
