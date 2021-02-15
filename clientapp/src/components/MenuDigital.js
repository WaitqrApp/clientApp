import React from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { Form, Card, Col, Row, Accordion, Badge, Button } from 'react-bootstrap';
import Picaña from './Menu/picana-t.jpg';
import { useState } from "react";
function MenuDigital() {
    const [modalShow, setModalShow] = useState(false);
    let history = useHistory();
  return (
    <div className="contenido">
      <Button onClick={() => history.goBack()}>Back</Button>
      <h1>La Noria</h1>
      <p>Mesa 1</p>
      <Form.Control size="sm" type="text" placeholder="Busca un platillo" />
      <h1>Menú del día</h1>
      <Card className="mb-4" style={{  flex:1 }}>
                <Card.Img variant="top" src={Picaña} />
                <Card.Body>
                    <Card.Title className="font-weight-bold">
                        <Row>
                            <Col>
                               Picaña Haye
                            </Col>
                            <Col>
                                <Col>
                                <Badge variant="secondary">El más pedido</Badge>
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
            <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Entradas
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Papas Gajo</Card.Body>
    </Accordion.Collapse>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Guacamole con Totopos</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Comidas
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Papas con Tofu</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    </div>
  );
}

export default MenuDigital;