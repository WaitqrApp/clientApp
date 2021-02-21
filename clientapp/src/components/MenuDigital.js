import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import { Form, Card, Col, Row, Accordion, Badge, Container, Button } from 'react-bootstrap';
import Picaña from './Menu/picana-t.jpg';
import Papas from './papas-gajo.jpg';

import css from './Menu/menucliente.css'


function MenuDigital() {
    let history = useHistory();
  return (
    <div className="menu-principal">
      <h1>La Noria</h1>
      <p>Mesa 1</p>
      <span className="oi oi-basket"></span>
      <Form.Control className="searchbar" size="sm" type="text" placeholder="Busca un platillo" />
      <h2>Lo más recomendado</h2>
      <Link to={'/DetallePlatillo'}>
      <Card className="mb-4" style={{ flex: 1 }}>
        <Card.Img variant="top" src={Picaña} />
        <Card.Body>
          <Card.Title className="font-weight-bold">
            <Row>
              <Col>
                Picaña Haye
              </Col>
              <Col>
                <Col>
                  <Badge className="badge" variant="primary"> El más pedido</Badge>
                </Col>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
            Deliciosa Picaña Haye
                        <br></br>
            <span><span>$</span>365.00</span>
          </Card.Text>
        </Card.Body>

      </Card>
      </Link>

      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3 className="mt-2">Entradas</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Container className="contenedor-platillo">
                <Row>
                  <Col xs={3}><Card.Img className="imagen-platillo img-fluid" variant="top" src={Papas} /></Col>
                  <Col xs={6}><h3 className="mt-3" >Papas Gajo</h3></Col>
                  <Col xs={3}><h3 className="mt-3" >$250</h3></Col>
                </Row>
              </Container>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="0">
            <Card.Body><h3 className="mt-4" >Guacamole con Totopos</h3></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3 className="mt-2">Comidas</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body><h3>Papas con Tofu</h3></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default MenuDigital;