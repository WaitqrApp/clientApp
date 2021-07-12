import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button, Card, Container } from 'react-bootstrap';
import "./styles.css"
import Logo from './logo_waitqr.png';

import restauranteContext from '../context/restaurantes/restauranteContext';
import mesasContext from '../context/mesas/mesasContext';

function Welcome() {

 //Extraer restaurantes de state inicial
 const restaurantesContext = useContext(restauranteContext);
 const { restaurantes, obtenerUnRestaurante, guardarRestauranteActual} = restaurantesContext;

 const mesassContext = useContext(mesasContext);
 const { mesasrestaurante, mesa, obtenerMesas, guardarMesaActual} = mesassContext;

 const [seleccion, guardarSeleccion] = useState({
     restauranteId: "",
     mesaId:""
 })

 const {restauranteId, mesaId} = seleccion

 useEffect(() => {
    obtenerUnRestaurante("5fd817645515ba5728db0adc");
    obtenerMesas("5fd817645515ba5728db0adc")
    
    
}, []); //para que corra solo una vez

seleccion.restauranteId = restaurantes._id

//leer los valores del formulario

const handleChange = (e) => {
    let obj = JSON.parse(e.target.value);
    guardarMesaActual(obj._id)
    guardarRestauranteActual("5fd817645515ba5728db0adc")
    console.log(mesa)
  };
    return (
        <Container fluid className="bienvenido">
            <Row>
                <Col>
                    <h3>Bienvenido a</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>{restaurantes.nombre}</h1>
                </Col>
            </Row>
            <Form >
            <Row className="align-middle">
                <h2>Confirma tu mesa</h2>
            </Row>
            <Row>
                <Col className="mesa">
                
                <Form.Control
                onChange={handleChange}
                name="mesaId"
                className="mesa" title="mesa 1" as="select">
                <option>Selecciona una mesa</option>
                {mesasrestaurante.map(mesa => (

                                <option
                                key={mesa._id}
                                value = {JSON.stringify(mesa)}
                                >{mesa.numero}</option>
                                ))}          
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
                        <Button type="submit" className="confirmar mt-3">Confirmar</Button>
                    </Link>
                </Col>
            </Row>
            </Form>
            <Row>
                <Col className="boton-logo">
                    <Card.Img className="logo" variant="top" src={Logo} />
                </Col>
            </Row>
        </Container>

    );
}

export default Welcome;