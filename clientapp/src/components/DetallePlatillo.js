import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Card, Col, Row, Badge, Button, Form, Container } from 'react-bootstrap';
import Picaña from './Menu/picana-t.jpg';
import { useHistory } from "react-router-dom";

import './styles.css'
function DetallePlatillo() {

    let history = useHistory();

    return (
        <Container>
      <Button variant = "light" onClick={() => history.goBack()}>Back</Button>

            <Card className="platillo ml-n3 p-0"> 
                <Row >
                    <Col sm={12} >
                        <Card.Img className="imagen-detalle" variant="top" src={Picaña} />
                    </Col>
                </Row>
                <Row>
                    <Card.Body>
                        <Card.Title className="font-weight-bold">
                            <Row>
                                <Col>
                                    <h1>Picaña Haye</h1>
                                </Col>
                            </Row>
                        </Card.Title>
                        <Card.Text className="mt-3">
                            Deliciosa Picaña Haye acompañada de tacos de tuetano y queso brie
                        <br></br>
                            <span><span>$</span>365.00</span>
                        </Card.Text>
                    </Card.Body>
                </Row>
            </Card>
            <Row>
                <Form>
                    <Row className="input-cantidad ml-2 mt-3">
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
                    <Row className="input-notas ml-2 mt-3">
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
                <Button className="confirmar mt-3" variant="primary">Agregar</Button>
            </Row>

        </Container>
    );
}

export default DetallePlatillo;