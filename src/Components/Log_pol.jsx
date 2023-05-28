import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import Logo from '../images/logo.png'

export default class Log_pol extends Component {
    render() {
        return (
            <>
                <style>
                    {`
                        .back_img{
                            margin-left:17%;
                            width:250px;
                            filter: opacity(50%);
                            margin-top: 1%;
                        }
                        .text{
                            font-size:20px;
                        }
                        .ead{
                            color: #909090;
                        }
                    `}
                </style>
                <Form className='text'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="ead">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="ead">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check" className="ead"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>

                </Form>
                <img src={Logo} className='back_img' />
            </>
        )
    }
}
