import React, { useState } from "react";
import { Card, Col, Row, Badge, Button, Form, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './styles.css';
import BackButton from './Buttons/BackButton';
import { Prev } from "react-bootstrap/esm/PageItem";

function Orden() {

    let history = useHistory();

    const [count, setcount] = useState(0)

    const increaseCount=() => {
        setcount((Prev)=>{
            return Prev + 1
        })
    }

    const decreaseCount=() => {
       setcount((Prev)=>{
           return Prev - 1
       }) 
    }

    return (
        <Container fluid className="orden">
            <Row>
                <Col className="" >
                    <BackButton className="boton-back-orden"/>
                </Col>
                <Col className="titulo-carrito mt-4" >
                    <h1>Carrito</h1>
                </Col>
                <Col className="mt-4" >
                    <ShoppingCartIcon className="carrito"/>
                </Col>
            </Row>
            
            <Row>
                <Col className="mt-4 mb-2">
                    <h3>Entradas</h3>
                </Col>
            </Row>
            <Row className="platillos">
                <Col>
                    <Card className="platillo-orden mb-2">
                        <Card.Text className="mr-4 ml-1 mt-3 mb-n2">Picaña Haye</Card.Text>
                        <Card.Text className="ml-4 mt-3">$500</Card.Text>
                        <IndeterminateCheckBoxIcon onClick={decreaseCount} className="menos mt-3"/>
                        <Card.Text className="platillo-orden-cantidad mt-3">{count}</Card.Text>
                        <AddBoxIcon  onClick={increaseCount} className="mas mt-3"/>
                    </Card>
                    <Card className="platillo-orden mb-2">
                        <Card.Text className="mr-4 ml-1 mt-3 mb-n2">Picaña Haye</Card.Text>
                        <Card.Text className="ml-4 mt-3">$500</Card.Text>
                        <IndeterminateCheckBoxIcon onClick={decreaseCount} className="menos mt-3"/>
                        <Card.Text className="platillo-orden-cantidad mt-3">{count}</Card.Text>
                        <AddBoxIcon onClick={increaseCount} className="mas mt-3"/>
                    </Card>
                    <Card className="platillo-orden mb-2">
                        <Card.Text className="mr-4 ml-1 mt-3 mb-n2">Picaña Haye</Card.Text>
                        <Card.Text className="ml-4 mt-3">$500</Card.Text>
                        <IndeterminateCheckBoxIcon onClick={decreaseCount} className="menos mt-3"/>
                        <Card.Text className="platillo-orden-cantidad mt-3">{count}</Card.Text>
                        <AddBoxIcon  onClick={increaseCount} className="mas mt-3"/>
                    </Card>
                    <Card className="platillo-orden mb-2">
                        <Card.Text className="mr-4 ml-1 mt-3 mb-n2">Picaña Haye</Card.Text>
                        <Card.Text className="ml-4 mt-3">$500</Card.Text>
                        <IndeterminateCheckBoxIcon onClick={decreaseCount} className="menos mt-3"/>
                        <Card.Text className="platillo-orden-cantidad mt-3">{count}</Card.Text>
                        <AddBoxIcon onClick={increaseCount} className="mas mt-3"/>
                    </Card>
                    <Card className="platillo-orden mb-2">
                        <Card.Text className="mr-4 ml-1 mt-3 mb-n2">Picaña Haye</Card.Text>
                        <Card.Text className="ml-4 mt-3">$500</Card.Text>
                        <IndeterminateCheckBoxIcon onClick={decreaseCount} className="menos mt-3"/>
                        <Card.Text className="platillo-orden-cantidad mt-3">{count}</Card.Text>
                        <AddBoxIcon  onClick={increaseCount} className="mas mt-3"/>
                    </Card>
                    <Card className="platillo-orden mb-2">
                        <Card.Text className="mr-4 ml-1 mt-3 mb-n2">Picaña Haye</Card.Text>
                        <Card.Text className="ml-4 mt-3">$500</Card.Text>
                        <IndeterminateCheckBoxIcon onClick={decreaseCount} className="menos mt-3"/>
                        <Card.Text className="platillo-orden-cantidad mt-3">{count}</Card.Text>
                        <AddBoxIcon onClick={increaseCount} className="mas mt-3"/>
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
                <Col className="notas-titulo">
                    <h1>Notas para la cocina</h1>
                </Col>
                <Col className="notas-texto">
                    <Form.Control as="textarea" rows={2} />
                </Col>
            </Row>
            <Row>
                <Col className="boton-ordenar">
                    <Link to={'/estatus'}>
                        <Button className="confirmar" variant="primary">Confirmar</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Orden;