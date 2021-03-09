import React from "react";
import { Card, Col, Row, Badge, Button, Form, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './styles.css';
import BackButton from './Buttons/BackButton';

function Orden() {

    let history = useHistory();

    return (
        <Container fluid className="orden">
            <Row>
                <Col className="mt-4">
                    <BackButton/>
                </Col>
                <Col className="mt-4">
                    <h1>Carrito</h1>
                </Col>
                <Col className="mt-4">
                    <ShoppingCartIcon />
                </Col>
            </Row>
            
            <Row>
                <Col className="mt-4 mb-2">
                    <h1>Entradas</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="platillo-orden">
                        <Card.Text className="mr-5">Picaña Haye</Card.Text>
                        <Card.Text className="mr-0">$500</Card.Text>
                        <Card.Text className="mr-0">Botones de cantidad</Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row className="total">
                <Col className="total-titulo">
                    <h1>Total</h1>
                </Col>
                <Col className="total-texto">
                    <h1>$518</h1>
                </Col>
            </Row>
            <Row>
                <Col className="notas-titulo" sm={4}>
                    <h1>Notas para la cocina</h1>
                </Col>
                <Col className="notas-texto" sm={8}>
                    <h2>Notas</h2>
                </Col>
            </Row>
            <Row>
                <Col className="boton-ordenar" sm={12}>
                    <Link to={'/estatus'}>
                        <Button className="confirmar" variant="primary">Confirmar</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Orden;