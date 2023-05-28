import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Pop_up(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            
                <button className="log_in" onClick={handleShow}>RESERVE</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reserve a {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name & Surname</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter your name and surname"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="city"
                                placeholder="Enter your location"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="Enter your phone number"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Send us
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pop_up;