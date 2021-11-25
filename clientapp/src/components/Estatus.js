import React, { useState, useContext, useEffect } from "react";

import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.css";
import Logo from "./logo_waitqr_update.png";
import { Link } from "react-router-dom";

import platilloOrdenadoContext from "../context/platillosOrdenados/platilloOrdenadoContext";

function Estatus() {
  let history = useHistory();

  const platillosOrdenadossContext = useContext(platilloOrdenadoContext);
  const {
    platilloOrdenadoOrden,
    obtenerPlatilloOrdenado,
    actualizarPlatilloOrdenado,
  } = platillosOrdenadossContext;

  useEffect(() => {
    obtenerPlatilloOrdenado(localStorage.getItem("ordenid"));
  }, []);

  return (
    <Container className="estatus" fluid>
      <Row>
        <Col className="estatus-titulo  ml-auto mr-auto">
          <h1>Tu órden ha sido recibida</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Resumen de órden</h2>
        </Col>
      </Row>
      <Row className="resumen-orden-row">
        <Card className="resumen-orden-card ml-auto mr-auto ">
          {platilloOrdenadoOrden.map((platillo) => (
            <span>
              <Card.Text className="nombre-platillo mt-1 ml-2 mb-n1">
                {platillo.cantidad} X {platillo.nombre}
              </Card.Text>
              <Card.Text className="comentatrios-platillo ml-4">
                {platillo.comentario}
              </Card.Text>
            </span>
          ))}
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
