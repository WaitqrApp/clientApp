import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Card, Col, Row, Badge, Button, Form } from 'react-bootstrap';
import Picaña from './Menu/picana-t.jpg';
function DetallePlatillo() {


    return (
        <div className="contenido">
            <Card className="mb-4" style={{ flex: 1 }}>
                <Card.Img variant="top" src={Picaña} />
                <Card.Body>
                    <Card.Title className="font-weight-bold">
                        <Row>
                            <Col>
                                Picaña Haye
                            </Col>
                            <Col>
                                <Col>
                                    <Badge variant="secondary">El más pedido</Badge>
                                </Col>
                            </Col>
                        </Row>

                    </Card.Title>
                    <Card.Text>
                        Deliciosa Picaña Haye acompañada de tacos de tuetano y queso brie
                        <br></br>
                        <span><span>$</span>365.00</span>
                    </Card.Text>

                </Card.Body>
            </Card>
            <Form>
                <Form.Group>
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Notas a la cocina</Form.Label>
                    <Form.Control type="text" placeholder="Notas a la cocina" />
                </Form.Group>
            </Form>

            <Button variant="primary">Agregar</Button>
        </div>
    );
}

export default DetallePlatillo;