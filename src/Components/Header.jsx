import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../Styles/Head_fot.css';

import email_ic from '../images/email.png'
import ph_ic from '../images/phone-call.png'

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import ToDo_list from '../Pages/Wish_List';
import Login from '../Pages/Login';

export default class Header extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar collapseOnSelect expand="md" className='header' >
                        <Container className='top'>
                            <div className='main_m'>
                                <div>
                                    <Navbar.Collapse id='responsive-navbar-nav' align-right>
                                        <Nav className='menu'>
                                            <Nav.Link as={Link} to="/" > О НАС </Nav.Link>
                                            <Nav.Link as={Link} to="/cars"> СПИСОК МАШИН </Nav.Link>
                                            <Nav.Link as={Link} to="/contact"> КОНТАКТЫ </Nav.Link>
                                            <Nav.Link as={Link} to="/comment"> ОТЗЫВЫ </Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </div>
                                <div>
                                    <Navbar.Brand href="/" >
                                        <div className="logo_h">
                                            <img
                                                src={Logo}
                                                height="150px"
                                                width="150px"
                                                alt="Logo"
                                            />
                                        </div>
                                    </Navbar.Brand>
                                </div>

                                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                            </div>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/contact' element={<Contact />} />
                        <Route exact path='/cars' element={<ToDo_list />} />
                        <Route exact path='/comment' element={<Login />} />
                    </Routes>

                    <footer>
                        <div className="foot">
                            <div className="fir_part">
                                <div className="li_text">
                                    <p>© 2023. RENTCARS Inc.</p>
                                </div>
                            </div>
                            <div>
                                <a href="" className="soc_link" type="email"><img src={email_ic} alt="" /></a>
                                <a href="" className="soc_link" type="tel"><img src={ph_ic} alt="" /></a>
                            </div>
                        </div>
                    </footer>
                </Router>
            </>
        )
    }
}
