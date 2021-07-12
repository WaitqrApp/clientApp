import React, { useEffect, useContext, useState } from 'react'
import { Form, Card, Col, Row, Accordion, Badge, Container, InputGroup } from 'react-bootstrap';
import Papas from './papas-gajo.jpg';


import platillosContext from '../context/platillos/platillosContext';

function MenuPlatillo({seccion}){

    const platillossContext = useContext(platillosContext);
    const { platillosseccion, platillo, obtenerPlatillos, guardarPlatilloActual } = platillossContext;

    useEffect(() => {

        obtenerPlatillos(seccion._id);
      }, [seccion]);

    return(
      
        <Container className="contenedor-platillo">
              {platillosseccion.map((platillo, i) => (
                <Row>
                  <Col xs={3}><Card.Img className="imagen-platillo img-fluid" variant="top" src={platillo.imagenPlatillo} /></Col>
                  <Col xs={6}><h3 className="mt-3" >{platillo.nombre}</h3></Col>
                  <Col xs={3}><h3 className="mt-3" >${platillo.precio}</h3></Col>
                </Row>
                 ))}
              </Container>
       
    );
}

export default MenuPlatillo;