import React, { useContext, useEffect } from "react";
import { Col, Row, Container, Button, Image, Card } from "react-bootstrap";
import {
  BrowserRouter as Router,
  useLocation,
  useHistory,
} from "react-router-dom";
import Logo from "./logo_waitqr_update.png";

function Gracias() {
  let location = useLocation();
  const history = useHistory();

  return (
    <Container className="estatus text-center">
      <Row className="justify-content-md-center">
        <Card className="logo-card-gracias">
          <Card.Img src={Logo}></Card.Img>
        </Card>
      </Row>
      <Row className="justify-content-md-center">
        <h1>Gracias, en breve un mesero se acercara a cobrarte.</h1>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <h3>Si quieres algo más, escanea el QR de tu mesa.</h3>
      </Row>
    </Container>
  );
}

export default Gracias;
