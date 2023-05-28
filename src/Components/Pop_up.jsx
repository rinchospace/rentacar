import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Pop_up = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="log_in" onClick={handleShow}>ВЫБРАТЬ</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Забронировать {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Имя & Фамилия</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Введите своё имя и фамилию"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                            <Form.Label>Местоположение</Form.Label>
                            <Form.Control
                                type="city"
                                placeholder="Введите своё местоположение"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Номер Телефона</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="Введите свой номер телефона"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Отправить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pop_up;