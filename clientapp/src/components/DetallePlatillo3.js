import React from "react";
import { Card, Col, Row, Button, Form, Container } from 'react-bootstrap';
import Picaña from './Menu/picana-t.jpg';
import BackButton from './Buttons/BackButton';

import './styles.css'

import platillosContext from '../context/platillos/platillosContext';


function DetallePlatillo() {



    return (
        <Container fluid className="detalle-platillo">
            <Row>
                <Card className="platillo">
                    <Row className="ml-auto mr-auto">
                        <Col sm={12} >
                            <BackButton className="boton-back" />
                            <Card.Img className="imagen-detalle" variant="top" src={Picaña} />
                        </Col>
                    </Row>
                    <Row className="mr-auto ml-auto">
                        <Card.Body>
                            <Card.Title className="font-weight-bold">
                                <Row>
                                    <Col>
                                        <h1>Picaña Haye</h1>
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Text className="mt-3">
                                <h2>Deliciosa Picaña Haye acompañada de tacos de tuetano y queso badón (Brie)</h2>
                            </Card.Text>
                            <Card.Text className="mt-2">
                                <h3>$365.00</h3>
                            </Card.Text>
                        </Card.Body>
                    </Row>
                </Card>
            </Row>
            <Row>
                <Form>
                    <Row className="input-cantidad ml-4 mt-3">
                        <Form.Group>
                            <Col sm={3}>
                                <Form.Label>Cantidad</Form.Label>
                            </Col>
                            <Col sm={9}>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row className="input-notas ml-4 mt-3">
                        <Form.Group className="input-notas">
                            <Row>
                                <Col sm={12}>
                                    <Form.Label>Notas para la cocina</Form.Label>
                                </Col>
                            </Row>
                            <Row >
                                <Col sm={12}>
                                    <Form.Control className="input-notas-texto" type="text" placeholder="Notas para la cocina" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                </Form>
            </Row>
            <Row>
                    <Button className="confirmar mt-3">Agregar</Button>
            </Row>
        </Container>
    );
}

export default DetallePlatillo;