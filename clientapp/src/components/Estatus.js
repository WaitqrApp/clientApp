import React, { useState, useContext, useEffect } from "react";

import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.css";
import Logo from "./logo_waitqr_update.png";
import { Link } from "react-router-dom";

import platilloOrdenadoContext from "../context/platillosOrdenados/platilloOrdenadoContext";
import ordenContext from "../context/ordenes/ordenContext";

function Estatus() {
  let history = useHistory();

  const ordensContext = useContext(ordenContext);
  const {
    ordensesionindividual,
    obtenerOrdenSesionIndividual,
    actualizarOrden,
    agregarOrden,
  } = ordensContext;

  const platillosOrdenadossContext = useContext(platilloOrdenadoContext);
  const {
    platilloOrdenadoOrden,
    obtenerPlatilloOrdenado,
    actualizarPlatilloOrdenado,
  } = platillosOrdenadossContext;

  useEffect(() => {
    obtenerPlatilloOrdenado(localStorage.getItem("ordenid"));
  }, []);

  const [ordenAux, guardarOrdenAux] = useState({
    id: "",
    pagar: "",
  });

  const pagarOrden = (e) => {
    ordenAux._id = localStorage.getItem("ordenid");
    ordenAux.pagar = true;
    actualizarOrden(ordenAux);
    var total = localStorage.getItem("total");
    localStorage.clear();
    localStorage.setItem("total", total);
    history.push("/Gracias");
  };

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
        <Col m={6}>
          <Link to={"/MenuDigital"}>
            <Button className="boton-ordenar">Ordenar mas</Button>
          </Link>
        </Col>
        <Col m={6}>
          <Button className="boton-pagar" onClick={() => pagarOrden()}>
            Pagar y finalizar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Estatus;
