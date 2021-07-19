import React, { useEffect, useContext, useState } from 'react'
import { Form, Card, Col, Row, Accordion, Badge, Container, InputGroup } from 'react-bootstrap';
import Papas from './papas-gajo.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



import platillosContext from '../context/platillos/platillosContext';

function MenuPlatillo({seccionSeleccionada}){

  console.log("llego esta seccion " + seccionSeleccionada.nombre)
    const platillossContext = useContext(platillosContext);
    const { platillosseccion, platillo, obtenerPlatillos, guardarPlatilloActual } = platillossContext;
  
    
    useEffect(() => {
    
        obtenerPlatillos(seccionSeleccionada._id);
      }, [seccionSeleccionada]);

      //TO-DO
      //Mover ese Link para no perder el CSS, ahorita es meramente funcional


    return(
      
        <Container className="contenedor-platillo">
              {platillosseccion.map((platillo, i) => (
                <Row  >
                  
                  <Col xs={3}
                  onClick={() => guardarPlatilloActual(platillo)}
                  >
                  <Link to={'/DetallePlatillo'}> 
                    <Card.Img className="imagen-platillo img-fluid mt-4" variant="top" src={platillo.imagenPlatillo} />
                    </Link>
                    </Col>
                  <Col xs={6}
                  onClick={() => guardarPlatilloActual(platillo)}
                  >
                  <Link to={'/DetallePlatillo'}> 
                    <h3 className="mt-3" >{platillo.nombre}</h3>
                  <p>{platillo.descripcion}</p>
                  </Link>
                  </Col>
                  <Col xs={3}
                  onClick={() => guardarPlatilloActual(platillo)}
                  >
                  <Link to={'/DetallePlatillo'}> 
                    <h3 className="mt-3" >${platillo.precio}</h3>
                    </Link>
                    </Col>
                  
                </Row>
                 ))}
              </Container>
       
    );
}

export default MenuPlatillo;