import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button, Card, Container } from 'react-bootstrap';
import "./styles.css"
import Logo from './logo_waitqr.png';

import restauranteContext from '../context/restaurantes/restauranteContext';
import mesasContext from '../context/mesas/mesasContext';
import sesionGeneralContext from '../context/sesionesGenerales/sesionGeneralContext';
import sesionIndividualContext from '../context/sesionesIndividuales/sesionIndividualContext';

import { useHistory } from "react-router-dom";

function Welcome() {

    let history = useHistory();
 //Extraer restaurantes de state inicial
 const restaurantesContext = useContext(restauranteContext);
 const { restaurantes, obtenerUnRestaurante, guardarRestauranteActual} = restaurantesContext;

 const mesassContext = useContext(mesasContext);
 const { mesasrestaurante, mesa, obtenerMesas, guardarMesaActual} = mesassContext;

 const sesionGeneralsContext = useContext(sesionGeneralContext);
 const {sesiongeneralmesa, obtenerSesionGeneral, agregarSesionGeneral} = sesionGeneralsContext;
 
 const sesionIndividualsContext = useContext(sesionIndividualContext);
 const { sesionindividualsesiongeneral, obtenerSesionIndividual, agregarSesionIndividual} = sesionIndividualsContext;

 const[error, guardarError] = useState(false)


 const [seleccion, guardarSeleccion] = useState({
     restauranteId: "",
     mesaId:""
 })

 const [ sesionGeneralAux, guardarSesionGeneralAux] = useState({

     horarioInicio: '',
     mesa: '',
     restaurante:''
 })

 

 const [formulario, guardarFormulario] = useState({
     mesaNombre : ''
 })

 const {mesaNombre} = formulario



 const {restauranteId, mesaId} = seleccion

 const [ sesionIndividualAux, guardarSesionIndividualAux] = useState({
    
    horarioInicio: '',
    sesionGeneral: '',
    restaurante:''
})


 useEffect(() => {
    obtenerUnRestaurante("5fd817645515ba5728db0adc");
    obtenerMesas("5fd817645515ba5728db0adc");
    obtenerSesionGeneral(localStorage.getItem('mesalocal'))

    
}, []); //para que corra solo una vez

seleccion.restauranteId = restaurantes._id

//leer los valores del formulario

const handleChange = e => {
    guardarFormulario({
        ...formulario,
        [e.target.name]: e.target.value
      })
    let obj = JSON.parse(e.target.value);
    guardarMesaActual(obj._id)
    sesionGeneralAux.mesa = obj._id
    guardarRestauranteActual("5fd817645515ba5728db0adc")
    console.log(mesa)
    localStorage.setItem('mesalocal', sesionGeneralAux.mesa);
    obtenerSesionGeneral(localStorage.getItem('mesalocal'))
  };

  const revisarFormulario = e =>{
      console.log("presione el boton")
    if(formulario.mesaNombre === ''){
      guardarError(true);
      return
      
    }
    if(!localStorage.getItem('sesiongenerallocal')){ //si no hay sesiongenerallocal
       
        console.log("este es el length"+sesiongeneralmesa.length)
        console.log("esto es lo que trae"+JSON.stringify(sesiongeneralmesa))
        if(sesiongeneralmesa.length>0){
          
            console.log("entre en if")
            localStorage.setItem('sesiongeneralid', sesiongeneralmesa[0]._id);
            //sesiongeneralmesa.length = 0;
            obtenerSesionGeneral(sesionGeneralAux.mesa)
            console.log("ya la mande a cero "+ sesiongeneralmesa.length )
            history.push("/MenuDigital");
        }
        else{
            console.log("entre en else")
            sesionGeneralAux.horarioInicio = new Date().toLocaleString("en-GB", {timeZone: 'America/Mexico_City'})
            sesionGeneralAux.restaurante =  restaurantes._id
            agregarSesionGeneral(sesionGeneralAux)
            //localStorage.setItem('mesalocal', sesionGeneralAux.mesa);
            //sesiongeneralmesa.length = 0;
            obtenerSesionGeneral(sesionGeneralAux.mesa)
            console.log("ya la mande a cero "+ sesiongeneralmesa.length )

            history.push("/MenuDigital");
        }
              
             
          }
    else
    {
        history.push("/MenuDigital");
    }
    
          
          
      
      
    }



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
                name="mesaNombre"
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
            {error?
                <div className="text-center mt-4">
                    <p id="alerta ">Falto seleccionar una mesa</p>
                </div>
                : null}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col className="boton-ordenar">
                   
                    
                        <Button  className="confirmar mt-3" onClick={() => revisarFormulario()}>Confirmar</Button>
                    
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