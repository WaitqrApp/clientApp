import React, { useContext, useEffect } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import {
  BrowserRouter as Router,
  useLocation,
  useHistory,
} from "react-router-dom";

function NoMatch() {
  let location = useLocation();
  const history = useHistory();

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Image src="https://res.cloudinary.com/waitqrapp/image/upload/c_scale,w_400/v1637521596/logo_waiter-01_copy_c6pxzh.png"></Image>
      </Row>
      <Row className="justify-content-md-center">
        <h3>
          oops, no se como es que llegaste hasta aquí{" "}
        </h3>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Button /* onClick={() => history.goBack()} */>Regresar</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
