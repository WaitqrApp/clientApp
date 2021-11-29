import React, { useContext, useEffect } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import {
  BrowserRouter as Router,
  useLocation,
  useHistory,
} from "react-router-dom";

function Gracias() {
  let location = useLocation();
  const history = useHistory();

  return (
    <Container className="text-center">
      <Row className="justify-content-md-center">
        <Image src="https://res.cloudinary.com/waitqrapp/image/upload/c_scale,w_400/v1637521596/logo_waiter-01_copy_c6pxzh.png"></Image>
      </Row>
      <Row className="justify-content-md-center">
        <h3>
          Gracias por usar nuestra aplicacion, en breve un mesero se acercara a cobrarte.
        </h3>
        <h3>
          En caso de querer volver a ordenar es necesario volver a escanear el codigo QR de tu mesa.
        </h3>
      </Row>
     
    </Container>
  );
}

export default Gracias;
