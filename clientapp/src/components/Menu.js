import React, {useEffect, useContext, useState} from 'react';
import { Form, Card, Col, Row, Accordion, Badge, Container, InputGroup } from 'react-bootstrap';


import menusContext from '../context/menus/menusContext';
import seccionesContext from '../context/secciones/seccionesContext';
import MenuPlatillo from './MenuPlatillo';

function Menu({menu}){

    const menussContext = useContext(menusContext);
    const { menusrestaurante, obtenerMenus, guardarMenuActual } = menussContext;

    //obtener la funcion del context de seccion
  const seccionessContext = useContext(seccionesContext);
  const {seccion,seccionesmenu, obtenerSecciones, guardarSeccionActual} = seccionessContext;

  useEffect(() => {
    obtenerSecciones(menu[0]._id);
  }, [menu]);

  const [seccionSeleccionada, guardarSeccionSeleccionada] = useState({});

  const seleccionarSeccion = seccion =>{
    console.log("seleccione:" + seccion.nombre)
    guardarSeccionActual(seccion._id)
    guardarSeccionSeleccionada(seccion)
    console.log("seccionSeleccionada" + seccionSeleccionada.nombre)
}



    return(
        <>
    <Accordion defaultActiveKey="0">
        {seccionesmenu.map(seccion => (
        <Card>
        
          <Accordion.Toggle as={Card.Header}  key={seccion._id}  eventKey={seccion._id} onClick={() => seleccionarSeccion(seccion)}>
            <h3 className="mt-2">{seccion.nombre}</h3>
          </Accordion.Toggle>
          <Accordion.Collapse key={seccion._id}  eventKey={seccion._id}>
            <Card.Body>
              <MenuPlatillo
              seccionSeleccionada = {seccionSeleccionada}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        ))}
        
      </Accordion>
      <br/><br/>
          </>

    );
  
}

export default Menu;