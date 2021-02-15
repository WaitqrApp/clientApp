import React, { Fragment, useContext, useEffect } from 'react';
import { Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Welcome() {
    
    return (
        <>
        
            <Col>
                <Row>
                    <div>
                        <h3>Bienvenido a </h3>
                        <h1>Restaurante La Noria</h1>
                    </div>
                </Row>
                <Row>
                    Confirma tu mesa
        
                </Row>
                <Row>
                <DropdownButton
                        menuAlign="right"
                        title="mesa 1"
                        id="dropdown-menu-align-right"
                        variant = "light"
                        large = "block"
                    >
                        <Dropdown.Item eventKey="1">2</Dropdown.Item>
                        <Dropdown.Item eventKey="2">3</Dropdown.Item>
                        <Dropdown.Item eventKey="3">4</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">no aparece mi mesa</Dropdown.Item>
                    </DropdownButton>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Row>
                <Link to={'/MenuDigital'}>
                <Button variant="primary">CONFIRMAR</Button>

                </Link>
                </Row>
            </Col>
        </>

    );
}

export default Welcome;