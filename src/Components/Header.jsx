import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../images/logo.png'

import wpp_f from '../images/wpp.png'
import inst_f from '../images/inst.png'
import vk_f from '../images/vk.png'

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import ToDo_list from '../Pages/Wish_List';
import Login from '../Pages/Login';

export default class Header extends Component {
    render() {
        return (
            <>
                <style type='text/css'>
                    {`
                    *{
                        font-family: 'Montserrat', serif;
                      }
                        .header{
                            background: rgb(33, 33, 33);
                            box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.377);
                            padding-bottom: 20px;
                        }
                        .logo_h{
                            margin-top: 10px;
                        }
                        .menu{
                            font-size: 20px;
                            height: 100px;
                            margin: 0;
                            padding: 0;
                            display: flex;
                            align-items: center;
                        }
                        .menu a{
                            color: white;
                            font-weight: bolt;
                            text-decoration: none;
                            padding: 10px 15px;
                        }
                        .h-name{
                            letter-spacing: 5px;
                            color: white;
                            font-size: 50px;
                            font-style: italic;
                            font-weight: bold;
                            margin: 0px;
                            text-align: right;
                        }
                        .socmed{
                            width: 100%;
                            position: relative;
                            display: flex;
                            justify-content: space-between;
                            align-self: center;
                            border-bottom: 1px solid white;
                        }
                        .socmed a{
                            text-decoration: none;
                            color: white;
                            font-weight: 900;
                        }
                        .wpp, .insta, .vk{
                            position: relative;
                            width: 200px;
                            display: flex;
                            justify-content: center;
                        }
                        .wpp_img, .insta_img, .vk_img{
                            position: relative;
                            width: 15%;
                        }
                        .main_m{
                            width:100%;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;
                        }
                        .top{
                            display: flex;
                            flex-direction: column;
                        }
                        footer{
                            padding-top: 6px;
                            padding-bottom: 13px;
                            padding-right: 20%;
                            padding-left: 20%;
                            background-color: rgb(230, 230, 230);
                        }
                        .foot{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            color: rgb(90, 90, 90);
                            font-size: 14px;
                        }
                        .soc_link{
                            border-radius: 3px;
                            transition: 0.1s;
                            margin-left: 20px;
                            padding-bottom: 10px;
                        }
                        .soc_link:hover{
                            border-bottom: 4px solid black;
                        }
                        .li_text a{
                            color: rgb(90, 90, 90);
                            text-decoration: none;
                            transition: 0.5s;
                            cursor:pointer;
                            padding: 5px;
                        }
                        .li_text a:hover{
                            color: white;
                        }
                        .li_text p{
                            color: rgb(90, 90, 90);
                            margin-top: 0px;
                        }
                        .fir_part{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                        }
                        .foot_logo img{
                            width: 80px;
                        }
                        .foot_logo{
                            margin-right: 30px;
                        }
                        .nav-link:hover {
                            color: orange;
                        }
                        .nav-link{
                            padding: 0%;
                        }
                    `}
                </style>
                <Router>
                    <Navbar collapseOnSelect expand="md" className='header' >
                        <Container className='top'>
                            <div className='main_m'>
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
                                <div>
                                    <Navbar.Collapse id='responsive-navbar-nav' align-right>
                                        <Nav className='menu'>
                                            <Nav.Link as={Link} to="/" > О НАС </Nav.Link>
                                            <Nav.Link as={Link} to="/todo_list"> СПИСОК МАШИН </Nav.Link>
                                            <Nav.Link as={Link} to="/contact"> КОНТАКТЫ </Nav.Link>
                                            <Nav.Link as={Link} to="/login"> ОТЗЫВЫ </Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </div>
                                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                            </div>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/contact' element={<Contact />} />
                        <Route exact path='/todo_list' element={<ToDo_list />} />
                        <Route exact path='/login' element={<Login />} />
                    </Routes>

                    <footer>
                        <div className="foot">
                            <div className="fir_part">
                                <div className="li_text">
                                    <p>© 2023. R&R cars Inc.</p>
                                    <Navbar>
                                        <Nav.Link as={Link} to="/"> Home </Nav.Link>|
                                        <Nav.Link as={Link} to="/todo_list"> Wish List </Nav.Link>|
                                        <Nav.Link as={Link} to="/contact"> Contact </Nav.Link>|
                                        <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                                    </Navbar>
                                </div>
                            </div>
                            <div>
                                <a href="" className="soc_link"><img src={inst_f} alt="" /></a>
                                <a href="" className="soc_link"><img src={vk_f} alt="" /></a>
                                <a href="" className="soc_link"><img src={wpp_f} alt="" /></a>
                            </div>
                        </div>
                    </footer>
                </Router>
            </>
        )
    }
}
