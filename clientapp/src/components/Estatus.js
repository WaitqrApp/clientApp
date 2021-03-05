import React from "react";
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './styles.css'
import Logo from './logo_waitqr.png';
import { Link } from 'react-router-dom';



function Estatus() {

    let history = useHistory();

    return (
        <Container className="estatus" fluid>
            <Row>
                <Col className="estatus-titulo  ml-auto mr-auto">
                    <h1>Tu órden ha sido recibida</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Órden #1</h2>
                </Col>
            </Row>
            <Row>
                <Col className="logo-texto">
                    <h3>Powered by</h3>
                </Col>
                <Col className="logo-estatus mr-auto ml-auto">
                    <Card.Img className="logo" variant="top" src={Logo} />
                </Col>
            </Row>
            <Row>
                <Col className="boton-ordenar" sm={12}>
                    <Link to={'/MenuDigital'}>
                        <Button className="confirmar" variant="primary">Ordenar Algo Más</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Estatus;