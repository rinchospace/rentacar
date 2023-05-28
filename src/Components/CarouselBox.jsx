import React, {Component} from 'react';
import Carousel from  'react-bootstrap/Carousel';

import scr1 from '../images/scr1.png';
import scr2 from '../images/scr2.png';
import scr3 from '../images/scr3.png';
import scr4 from '../images/scr4.png';
import scr5 from '../images/scr5.png';
import scr6 from '../images/scr6.png';
import scr7 from '../images/scr7.png';
import scr8 from '../images/scr8.png';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={scr1}
                     />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={scr2}
                     />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={scr3}
                     />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={scr4}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={scr5}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={scr6}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={scr7}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={scr8}
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}
