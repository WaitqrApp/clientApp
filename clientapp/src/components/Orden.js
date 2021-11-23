import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Badge,
  Button,
  Form,
  Container,
  ListGroup,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "./styles.css";
import BackButtonOrden from "./Buttons/BackButtonOrden";
import { Prev } from "react-bootstrap/esm/PageItem";

import platilloOrdenadoContext from "../context/platillosOrdenados/platilloOrdenadoContext";

function Orden() {
  const platillosOrdenadossContext = useContext(platilloOrdenadoContext);
  const {
    platilloOrdenadoOrden,
    obtenerPlatilloOrdenado,
    actualizarPlatilloOrdenado,
    eliminarPlatilloOrdenado,
  } = platillosOrdenadossContext;

  useEffect(() => {
    obtenerPlatilloOrdenado(localStorage.getItem("ordenid"));
  }, []);

  /*  console.log(platilloOrdenadoOrden); */

  let history = useHistory();

  const increaseCount = (platillo) => {
    platillo.cantidad = platillo.cantidad + 1;
    actualizarPlatilloOrdenado(platillo);
    history.push("/Orden");
  };

  const decreaseCount = (platillo) => {
    platillo.cantidad = platillo.cantidad - 1;
    actualizarPlatilloOrdenado(platillo);
    if (platillo.cantidad === 0) {
      eliminarPlatilloOrdenado(platillo._id);
    }
  };

  var total = 0;
  platilloOrdenadoOrden.map(
    (platillo) => (total = platillo.precio * platillo.cantidad + total)
  );

  const confirmarOrden = (e) => {
    platilloOrdenadoOrden.map(
      (platillo) => (
        (platillo.ordenado = true), actualizarPlatilloOrdenado(platillo)
      )
    );
    history.push("/estatus");
  };

  return (
    <Container fluid className="orden">
      <Row>
        <Col className="">
          <BackButtonOrden className="boton-back-orden" />
        </Col>
        <Col className="titulo-carrito mt-4">
          <h1>Carrito</h1>
        </Col>
        <Col className="mt-4">
          <ShoppingCartIcon className="carrito" />
        </Col>
      </Row>
      <Container className="platillos">
        <Row>
          <Col className="mt-4 mb-2">
            <h3>Por ordenar</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {platilloOrdenadoOrden
              .filter((platillo) => platillo.ordenado == false)
              .map((platillo) => (
                <Card className="platillo-orden mb-2">
                  <Card.Text className="mr-4 ml-1 mt-3">
                    {platillo.nombre}
                    <br></br>
                    <span className="">
                      <b>${platillo.precio}</b>
                    </span>
                    {/* ME MAMA ESTE PEDO SCRAPPY */}
                  </Card.Text>
                  {platillo.ordenado == false ? (
                    <IndeterminateCheckBoxIcon
                      onClick={() => decreaseCount(platillo)}
                      className="menos mt-3"
                    />
                  ) : (
                    <span></span>
                  )}
                  <Card.Text className="platillo-orden-cantidad mt-3">
                    {parseInt(platillo.cantidad, 10)}
                  </Card.Text>
                  {platillo.ordenado == false ? (
                    <AddBoxIcon
                      onClick={() => increaseCount(platillo)}
                      className="mas mt-3"
                    />
                  ) : (
                    <span></span>
                  )}
                </Card>
              ))}
          </Col>
        </Row>
        <Row>
          <Col className="mt-4 mb-2">
            <h3>Ya ordenado</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {platilloOrdenadoOrden
              .filter((platillo) => platillo.ordenado == true)
              .map((platillo) => (
                <Card className="platillo-orden mb-2">
                  <Card.Text className="mr-4 ml-1 mt-3">
                    {platillo.nombre}
                    <br></br>
                    <span className="pb-4">
                      <b>${platillo.precio}</b>
                    </span>
                    {/* ME MAMA ESTE PEDO SCRAPPY */}
                  </Card.Text>
                  {platillo.ordenado == false ? (
                    <IndeterminateCheckBoxIcon
                      onClick={() => decreaseCount(platillo)}
                      className="menos mt-3"
                    />
                  ) : (
                    <span></span>
                  )}
                  <Card.Text className="platillo-orden-cantidad mt-3">
                    X {parseInt(platillo.cantidad, 10)}
                  </Card.Text>
                  {platillo.ordenado == false ? (
                    <AddBoxIcon
                      onClick={() => increaseCount(platillo)}
                      className="mas mt-3"
                    />
                  ) : (
                    <span></span>
                  )}
                </Card>
              ))}
          </Col>
        </Row>
      </Container>
      <Row className="total">
        <Col className="total-titulo">
          <h1>Total</h1>
        </Col>
        <Col className="total-texto">
          <h1>${total}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="boton-ordenar">
          <Button
            className="confirmar"
            variant="primary"
            onClick={() => confirmarOrden()}
          >
            Confirmar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Orden;
