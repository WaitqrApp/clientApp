import React, { useEffect, useContext, useState } from 'react'
import { Card, Col, Row, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Picaña from './Menu/picana-t.jpg';
import BackButton from './Buttons/BackButton';
import { useHistory } from "react-router-dom";


import './styles.css'

import platillosContext from '../context/platillos/platillosContext';
import ordenContext from '../context/ordenes/ordenContext';
import restauranteContext from '../context/restaurantes/restauranteContext';
import mesasContext from '../context/mesas/mesasContext';
import platilloOrdenadoContext from '../context/platillosOrdenados/platilloOrdenadoContext';



function DetallePlatillo() {

    let history = useHistory();


    const platillossContext = useContext(platillosContext);
    const { platillosseccion, platillo, obtenerPlatillos, guardarPlatilloActual } = platillossContext;

    const ordensContext = useContext(ordenContext);
    const {  ordensesionindividual, obtenerOrdenSesionIndividual, agregarOrden} = ordensContext;
    const  platillosOrdenadossContext = useContext(platilloOrdenadoContext);
    const { agregarPlatilloOrdenado} = platillosOrdenadossContext;

    const mesassContext = useContext(mesasContext);
    const {  mesa} = mesassContext;
    const restaurantesContext = useContext(restauranteContext);
 const { restaurante} = restaurantesContext;

    const [platilloPedido, guardarPlatilloPedido] = useState({
        cantidad: "1",
        descripcion: ""

    })

    const {cantidad, descripcion} = platilloPedido;

    const [ ordenAux, guardarOrdenAux] = useState({

        sesionIndividual: '',
        sesionGeneral: '',
        restaurante:'',
        mesa:'',

    });
    const [ platilloOrdenadoAux, guardarPlatilloOrdenadoAux] = useState({

        nombre: '',
        precio: '',
        cantidad:'',
        comentario:'',
        platilloId:'',
        orden:'',
        restaurante:'',
        sesionIndividual:'',
        sesionGeneral:'',
        mesa:'',

    });
   

    useEffect(() => {
        if(!localStorage.getItem('ordenid')){
            ordenAux.sesionIndividual=localStorage.getItem('sesionindividualid');
            ordenAux.sesionGeneral=localStorage.getItem('sesiongeneralid');
            ordenAux.restaurante = localStorage.getItem('restaurantelocal');;
            ordenAux.mesa= localStorage.getItem('mesalocal');
            ordenAux.mesaNombre= localStorage.getItem('mesaNombre');
            agregarOrden(ordenAux)
            
         }
        
      },[]);

     


    const handleChange = e => {
        guardarPlatilloPedido({
            ...platilloPedido,
            [e.target.name]: e.target.value
          })
      };


   // console.log("llego este platillo" + platillo.nombre)

   const crearPlatilloOrdenado = e =>{
    platilloOrdenadoAux.nombre = platillo.nombre;
    platilloOrdenadoAux.precio = platillo.precio;
    platilloOrdenadoAux.cantidad = cantidad;
    platilloOrdenadoAux.comentario = descripcion;
    platilloOrdenadoAux.platilloId = platillo._id;
    platilloOrdenadoAux.orden = localStorage.getItem('ordenid');
    platilloOrdenadoAux.restaurante = localStorage.getItem('restaurantelocal');
    platilloOrdenadoAux.sesionIndividual = localStorage.getItem('sesionindividualid');
    platilloOrdenadoAux.sesionGeneral = localStorage.getItem('sesiongeneralid');
    platilloOrdenadoAux.mesa = localStorage.getItem('mesalocal');
    agregarPlatilloOrdenado(platilloOrdenadoAux)
    history.push("/MenuDigital")
   }
    

    const guardarPlatilloEnOrdenLocal = e => {

        
         crearPlatilloOrdenado();

           
         

     

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
                <Form className="form-cantidad" 
                 
                >
                    <Form.Group className="input-cantidad mt-3 ml-4">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control className="input-cantidad" as="select"
                             name="cantidad"
                             value={cantidad}
                             onChange={handleChange}>
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
                        <textarea className="input-notas-texto form-control" rows="3" placeholder="Notas para la cocina"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleChange}></textarea>
                        
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                
                <Col className="boton-ordenar">
                   {/* <Link to={'/Orden'}> */}
                        <Button className="confirmar" onClick={() => guardarPlatilloEnOrdenLocal()}>Agregar</Button>
                     {/*</Link>*/}
                </Col>
            </Row>
        </Container>
    );
}

export default DetallePlatillo;