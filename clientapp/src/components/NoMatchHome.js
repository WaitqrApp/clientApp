import React, { useContext, useEffect } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import {
  BrowserRouter as Router,
  useLocation,
  useHistory,
} from "react-router-dom";

function NoMatchHome() {
  let location = useLocation();
  const history = useHistory();

  return (
    <Container>
      <Row>
          <Col className="justify-content-center">
        <h4 className="text-center">Bienvenido </h4>
        <p className="text-center">Para poder ordenar por favor escanea un código QR</p>
          
          </Col>
      </Row>
      <Row className="justify-content-md-center">
          {/* <h4 className="text-center">Powered by</h4> */}
      </Row>
      <Row>
        <Col></Col>
        <Col >
          <Image src="https://res.cloudinary.com/waitqrapp/image/upload/c_scale,w_400/v1637521596/logo_waiter-01_copy_c6pxzh.png"></Image>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default NoMatchHome;
