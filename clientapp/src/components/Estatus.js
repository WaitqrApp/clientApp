import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.css";
import Logo from "./logo_waitqr.png";
import { Link } from "react-router-dom";

function Estatus() {
  let history = useHistory();

  return (
    <Container className="estatus" fluid>
      <Row>
        <Col className="estatus-titulo  ml-auto mr-auto">
          <h1>Tu órden ha sido recibida</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Órden #1</h2>
        </Col>
      </Row>
      <Row className="resumen-orden-row">
        <Card className="resumen-orden-card ml-auto mr-auto ">
          <Card.Text className="nombre-platillo mt-1 ml-2 mb-n1">1 X Picaña Haye</Card.Text>
          <Card.Text className="comentatrios-platillo ml-4">Con tortillas por favor</Card.Text>
          <Card.Text className="nombre-platillo mt-1 ml-2 mb-n1">2 X Cerveza Pacifico</Card.Text>
          <Card.Text className="nombre-platillo mt-1 ml-2 mb-n1">1 X Guacamole</Card.Text>
          <Card.Text className="comentatrios-platillo ml-4">Sin cebolla por favor</Card.Text>
          <Card.Text className="nombre-platillo mt-1 ml-2 mb-n1">1 X Picaña Haye</Card.Text>
          <Card.Text className="comentatrios-platillo ml-4">Con tortillas por favor</Card.Text>
          <Card.Text className="nombre-platillo mt-1 ml-2 mb-n1">1 X Guacamole</Card.Text>
          <Card.Text className="comentatrios-platillo ml-4">Sin cebolla por favor</Card.Text>
          <Card.Text className="nombre-platillo mt-1 ml-2 mb-n1">1 X Picaña Haye</Card.Text>
          <Card.Text className="comentatrios-platillo ml-4">Con tortillas por favor</Card.Text>
        </Card>
      </Row>
      <Row>
        <Col className="logo-texto">
          <h3>Powered by</h3>
        </Col>
        <Col className="logo-estatus mr-auto ml-auto">
          <Card.Img className="logo" variant="top" src={Logo} />
        </Col>
      </Row>
      <Row>
        <Col className="boton-ordenar">
          <Link to={"/MenuDigital"}>
            <Button className="confirmar mt-3">Ordenar Algo Más</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Estatus;
