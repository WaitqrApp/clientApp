import React from "react";
import { Card, Col, Row, Badge } from 'react-bootstrap';
import Picaña from './Cards/picana-t.jpg'

function DishCard() {
    return (
        <Card className="mb-4" style={{ flex: 1 }}>
            <Card.Img variant="top" src={Picaña} />
            <Card.Body>
                <Card.Title className="font-weight-bold">
                    <Row>
                        <Col>
                            Picaña Haye
                        </Col>
                        <Col>
                            <Col>
                                <Badge className="badge" variant="primary"> El más pedido</Badge>
                            </Col>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Text>
                    Deliciosa Picaña Haye cubierta de papas zaracatoyo y sal de himalaya
                            <br></br>
                    <span><span>$</span>365.00</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default DishCard;