import React from "react";
import { Card, Col, Row, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Picaña from './Menu/picana-t.jpg';
import BackButton from './Buttons/BackButton';

import './styles.css'

function DetallePlatillo() {

    return (
        <Container fluid>
            <Row>
                <Col sm={12} className="detalle-platillo">
                    <Card className="platillo">
                        <Card.ImgOverlay>
                            <BackButton className="mt-4"/>
                        </Card.ImgOverlay>
                        <Card.Img className="imagen-detalle" variant="top" src={Picaña} />
                        <Card.Body>
                            <Card.Title className="font-weight-bold">
                                <h1>Picaña Haye</h1>
                            </Card.Title>
                            <Card.Text className="mt-3">
                                <h2>Deliciosa Picaña Haye acompañada de tacos de tuetano y queso badón (Brie)</h2>
                            </Card.Text>
                            <Card.Text className="mt-2">
                                <h3>$365.00</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Form className="form-cantidad">
                    <Form.Group className="input-cantidad mt-3 ml-4">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control className="input-cantidad" as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Form>
                    <Form.Group className="input-notas ml-4">
                        <Form.Label>Notas para la cocina</Form.Label>
                        <Form.Control className="input-notas-texto" type="text" placeholder="" />
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Col className="boton-ordenar">
                    <Link to={'/Orden'}>
                        <Button className="confirmar">Agregar</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default DetallePlatillo;