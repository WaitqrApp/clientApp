import React from "react";
import {  Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../styles.css'

function BackButton() {

    let history = useHistory();

    return (
        <Container>
            <Button className="boton-back" onClick={() =>history.push("/MenuDigital")}><ArrowBackIcon/></Button>
        </Container>
    );
}

export default BackButton;