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

  const seleccionarSeccion = seccion =>{
    guardarSeccionActual(seccion._id)
}

    return(
        
    <Accordion defaultActiveKey="0">
        {seccionesmenu.map((seccion, i) => (
        <Card>
        
          <Accordion.Toggle as={Card.Header} eventKey={i} onClick={() => seleccionarSeccion(seccion)}>
            <h3 className="mt-2">{seccion.nombre}</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={i}>
            <Card.Body>
              <MenuPlatillo
              seccion = {seccion}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        ))}
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3 className="mt-2">Comidas</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body><h3>Papas con Tofu</h3></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    );
  
}

export default Menu;