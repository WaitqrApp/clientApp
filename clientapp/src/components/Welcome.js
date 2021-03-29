import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button, Card, Container } from 'react-bootstrap';
import "./styles.css"
import Logo from './logo_waitqr.png';

function Welcome() {

    return (
        <Container fluid className="bienvenido">
            <Row>
                <Col>
                    <h3>Bienvenido a</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Restaurante La Noria</h1>
                </Col>
            </Row>
            <Row className="align-middle">
                <h2>Confirma tu mesa</h2>
            </Row>
            <Row>
                <Col className="mesa">
                <Form.Control className="mesa" title="mesa 1" as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                </Form.Control>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col className="boton-ordenar">
                    <Link to={'/MenuDigital'}>
                        <Button className="confirmar mt-3">Confirmar</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="boton-logo">
                    <Card.Img className="logo" variant="top" src={Logo} />
                </Col>
            </Row>
        </Container>

    );
}

export default Welcome;