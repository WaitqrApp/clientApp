import React, { useState,useContext, useEffect } from "react";
import { Card, Col, Row, Badge, Button, Form, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './styles.css';
import BackButtonOrden from './Buttons/BackButtonOrden';
import { Prev } from "react-bootstrap/esm/PageItem";

import platilloOrdenadoContext from '../context/platillosOrdenados/platilloOrdenadoContext';


function Orden() {

    const  platillosOrdenadossContext = useContext(platilloOrdenadoContext);
    const { platilloOrdenadoOrden, obtenerPlatilloOrdenado, actualizarPlatilloOrdenado, eliminarPlatilloOrdenado} = platillosOrdenadossContext;

    useEffect(() => {
        obtenerPlatilloOrdenado(localStorage.getItem('ordenid'))
           
        
      },[]);

      console.log(platilloOrdenadoOrden)

    let history = useHistory();


    const increaseCount= platillo => {
       platillo.cantidad = platillo.cantidad+1;
        actualizarPlatilloOrdenado(platillo)
        history.push("/Orden")
    }

    const decreaseCount= platillo => {
        platillo.cantidad = platillo.cantidad-1;
        actualizarPlatilloOrdenado(platillo)
        if(platillo.cantidad === 0){
            eliminarPlatilloOrdenado(platillo._id)
        }
    }

    var total = 0
    platilloOrdenadoOrden.map(platillo => (
        total = (platillo.precio * platillo.cantidad) + total
    ))


    return (
        <Container fluid className="orden">
            <Row>
                <Col className="" >
                    <BackButtonOrden className="boton-back-orden"/>
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
                {
                platilloOrdenadoOrden.map(platillo => (
                    <Card className="platillo-orden mb-2">
                    <Card.Text className="mr-4 ml-1 mt-3 mb-n2">{platillo.nombre}</Card.Text>
                    <Card.Text className="ml-4 mt-3">${platillo.precio}</Card.Text>
                    <IndeterminateCheckBoxIcon onClick={() =>decreaseCount(platillo)} className="menos mt-3"/>
                    <Card.Text className="platillo-orden-cantidad mt-3">{parseInt(platillo.cantidad,10)}</Card.Text>
                    <AddBoxIcon  onClick={() => increaseCount(platillo)} className="mas mt-3"/>
                </Card>
                                ))}    
                    
                    
                </Col>
            </Row>
            <Row className="total">
                <Col className="total-titulo">
                    <h1>Total</h1>
                </Col>
                <Col className="total-texto">
                    <h1>${total}</h1>
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