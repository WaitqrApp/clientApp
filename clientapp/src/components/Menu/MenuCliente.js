import React from "react";
import {Card, Button,} from "react-bootstrap";
import platillo from "./Bitmap.png"
import css from "./menucliente.css"

import { useHistory } from "react-router-dom";


function MenuCliente() {
    let history = useHistory();
    return (
        <>
      <Button onClick={() => history.goBack()}>Back</Button>
        <Card style={{ width: '18rem' }}>
            <Card.Img className="platillo" variant="top" src= {platillo} rounded width={171}
                        height={180} />
            <Card.Body>
                <Card.Title>Hamburgesa Haye</Card.Title>
                <Card.Text>
                    Pan Brioché, Aceitunas, Carne de Vacuno
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    );


}
export default MenuCliente;