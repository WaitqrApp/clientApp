import React from "react";
import { Button, Container, Col } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../styles.css";


function BackButtonOrden() {

  return (
    <Container>
      <Link to={"/MenuDigital"}>
        <Button className="boton-back" >
          <ArrowBackIcon />
        </Button>
      </Link>
    </Container>
  );
}

export default BackButtonOrden;