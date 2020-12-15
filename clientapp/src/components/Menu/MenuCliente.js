import React from "react";
import {Card, Button,} from "react-bootstrap";

function MenuCliente() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/17/ac/63/17ac63ab360fe8f311cfbe7a4716ec0c.jpg" rounded />
            <Card.Body>
                <Card.Title>Hamburgesa Haye</Card.Title>
                <Card.Text>
                    Pan Brioché, Aceitunas, Carne de Vacuno
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );


}
export default MenuCliente;