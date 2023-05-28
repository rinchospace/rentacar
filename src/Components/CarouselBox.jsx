import React, {Component} from 'react';
import Carousel from  'react-bootstrap/Carousel';

import scr1 from '../images/scr1.png';
import scr2 from '../images/scr2.png';
import scr3 from '../images/scr3.png';

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
            </Carousel>
        )
    }
}
