import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Dropdown, DropdownButton, Button, Card, Container } from 'react-bootstrap';
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
                    <DropdownButton className="mesa ml-auto mr-auto" title="mesa 1" variant="light">
                        <Dropdown.Item eventKey="1">2</Dropdown.Item>
                        <Dropdown.Item eventKey="2">3</Dropdown.Item>
                        <Dropdown.Item eventKey="3">4</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">?</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col className="boton-orden">
                    <Link to={'/MenuDigital'}>
                        <Button className="confirmar mt-3">Confirmar</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Img className="logo" variant="top" src={Logo} />
                </Col>
            </Row>
        </Container>

    );
}

export default Welcome;