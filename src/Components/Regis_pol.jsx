import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Logo from '../images/logo.png';

export default class Regis_pol extends Component {
    render() {
        return (
            <>
                <style>
                    {`
                    .text{
                        font-size:20px;
                    }

                    .button{
                        color: rgb(247,161,2);
                    }
                    .ead{
                        color: #909090;
                    }
                `}
                </style>
                <Form className='text'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="ead">Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="ead">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="ead">Password</Form.Label>
                        <Form.Control type="password1" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword1">
                        <Form.Label className="ead">Repeat password</Form.Label>
                        <Form.Control type="password2" placeholder="Repeat Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check" className="ead" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registration
                    </Button>
                    <img src={Logo} className='back_img' />
                </Form>

            </>
        )
    }
}
