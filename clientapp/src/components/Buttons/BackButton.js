import React from "react";
import {  Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function BackButton() {

    let history = useHistory();

    return (
        <Container>
            <Button className="boton-back" onClick={() => history.goBack()}><ArrowBackIcon/></Button>
        </Container>
    );
}

export default BackButton;