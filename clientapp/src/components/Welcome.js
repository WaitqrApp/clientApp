import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Dropdown, DropdownButton, Button, Card, Container } from 'react-bootstrap';
import "./styles.css"
import Logo from './logo_waitqr.png';

function Welcome() {

    return (
        <Container fluid className="bienvenido">
            <Col>
                <Row>
                    <div>
                        <h3>Bienvenido a </h3>
                        <h1>Restaurante La Noria</h1>
                    </div>
                </Row>
                <Row className="align-middle">
                    <h2>Confirma tu mesa</h2>
                </Row>
                <Row>
                    <DropdownButton className="mesa" title="mesa 1" variant="light">
                        <Dropdown.Item eventKey="1">2</Dropdown.Item>
                        <Dropdown.Item eventKey="2">3</Dropdown.Item>
                        <Dropdown.Item eventKey="3">4</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">?</Dropdown.Item>
                    </DropdownButton>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Row>
                    <Link to={'/MenuDigital'}>
                        <Button className="confirmar" variant="primary">CONFIRMAR</Button>
                    </Link>
                </Row>
            </Col>
                <Card.Img className="logo" variant="top" src={Logo} />
        </Container>

    );
}

export default Welcome;