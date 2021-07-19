import React, { useEffect, useContext, useState } from 'react'
import { Card, Col, Row, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Picaña from './Menu/picana-t.jpg';
import BackButton from './Buttons/BackButton';

import './styles.css'

import platillosContext from '../context/platillos/platillosContext';

function DetallePlatillo() {


    const platillossContext = useContext(platillosContext);
    const { platillosseccion, platillo, obtenerPlatillos, guardarPlatilloActual } = platillossContext;
    console.log("llego este platillo" + platillo.nombre)
    var arregloOrdenLocal = []
    
    const guardarPlatilloEnOrdenLocal = platillo =>{
        var aux = JSON.parse(localStorage.getItem('ordenLocal'))
        if(aux){
            console.log(aux)
            var ordenLocal = localStorage.getItem('ordenLocal')
            ordenLocal.push(platillo)
            localStorage.setItem('ordenLocal',ordenLocal);


        }
        else{
            arregloOrdenLocal.push((platillo))
            localStorage.setItem('ordenLocal',arregloOrdenLocal);
        }


    }

    return (

        
        <Container fluid>
            <Row>
                <Col sm={12} className="detalle-platillo">
                    <Card className="platillo">
                        <Card.ImgOverlay>
                            <BackButton className="mt-4"/>
                        </Card.ImgOverlay>
                        <Card.Img className="imagen-detalle" variant="top" src={platillo.imagenPlatillo} />
                        <Card.Body>
                            <Card.Title className="font-weight-bold">
                                <h1>{platillo.nombre}</h1>
                            </Card.Title>
                            <Card.Text className="mt-3">
                                <h2>{platillo.descripcion}</h2>
                            </Card.Text>
                            <Card.Text className="mt-2">
                                <h3>${platillo.precio}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Form className="form-cantidad">
                    <Form.Group className="input-cantidad mt-3 ml-4">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control className="input-cantidad" as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Form>
                    <Form.Group className="input-notas ml-4">
                        <textarea className="input-notas-texto form-control" rows="3" placeholder="Notas para la cocina"></textarea>
                        
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                
                <Col className="boton-ordenar">
                   {/* <Link to={'/Orden'}> */}
                        <Button className="confirmar" onClick={() => guardarPlatilloEnOrdenLocal(platillo)}>Agregar</Button>
                     {/*</Link>*/}
                </Col>
            </Row>
        </Container>
    );
}

export default DetallePlatillo;