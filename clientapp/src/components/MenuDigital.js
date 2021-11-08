import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Form,
  Card,
  Col,
  Row,
  Accordion,
  Badge,
  Container,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import Picaña from "./Menu/picana-t.jpg";

import restauranteContext from "../context/restaurantes/restauranteContext";
import mesasContext from "../context/mesas/mesasContext";
import menusContext from "../context/menus/menusContext";
import sesionGeneralContext from "../context/sesionesGenerales/sesionGeneralContext";
import sesionIndividualContext from "../context/sesionesIndividuales/sesionIndividualContext";

import Menu from "./Menu";

import "./Menu/menucliente.css";
import Papas from "./papas-gajo.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Menu/menucliente.css";
import { Divider } from "@material-ui/core";

function MenuDigital() {
  //Extraer restaurantes de state inicial
  const restaurantesContext = useContext(restauranteContext);
  const {
    restaurantes,
    restaurante,
    obtenerUnRestaurante,
    guardarRestauranteActual,
  } = restaurantesContext;

  const mesassContext = useContext(mesasContext);
  const { mesasrestaurante, mesa, obtenerMesas, guardarMesaActual } =
    mesassContext;

  const menussContext = useContext(menusContext);
  const { menusrestaurante, menu, obtenerMenus, guardarMenuActual } =
    menussContext;

  const sesionGeneralsContext = useContext(sesionGeneralContext);
  const { sesiongeneralmesa, obtenerSesionGeneral, agregarSesionGeneral } =
    sesionGeneralsContext;

  const sesionIndividualsContext = useContext(sesionIndividualContext);
  const {
    sesionindividualsesiongeneral,
    obtenerSesionIndividual,
    agregarSesionIndividual,
  } = sesionIndividualsContext;

  const [menuEscogido, guardarMenuEscogido] = useState("");

  const [sesionIndividualAux, guardarSesionIndividualAux] = useState({
    horarioInicio: "",
    sesionGeneral: "",
    restaurante: "",
  });

  useEffect(() => {
    obtenerMenus(restaurante);
    obtenerSesionGeneral(mesa[0]._id);
  }, []);
  localStorage.setItem("restaurantelocal", restaurante);
  console.log(sesiongeneralmesa);

  //Funcion para agregar el menu actual
  const seleccionarMenu = (menu) => {
    guardarMenuActual(menu._id); //fijar un menu actual
    guardarMenuEscogido(menu.nombre);
    console.log(sesiongeneralmesa);

    if (sesiongeneralmesa.length > 0) {
      if (!localStorage.getItem("sesionindividualid")) {
        sesionIndividualAux.horarioInicio = new Date().toLocaleString("en-GB", {
          timeZone: "America/Mexico_City",
        });
        sesionIndividualAux.restaurante = restaurantes._id;
        console.log(sesiongeneralmesa);

        sesionIndividualAux.sesionGeneral = sesiongeneralmesa[0]._id;

        console.log(JSON.stringify(sesionIndividualAux.sesionGeneral));

        agregarSesionIndividual(sesionIndividualAux);
      }
    }
  };

  return (
    <div className="menu-principal">
      <h1>{restaurantes.nombre}</h1>
      <p>{mesa[0].numero}</p>
      <Link to={"/Orden"}>
        <ShoppingCartIcon className="carrito-menu" />
      </Link>

      <InputGroup className="searchbar">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <SearchIcon />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="text" placeholder="Busca un platillo" />
      </InputGroup>

      <h2>Lo más recomendado</h2>

      <Card className="mb-4" style={{ flex: 1 }}>
        <Link to={"/DetallePlatillo"}>
          <Card.Img variant="top" src={Picaña} />
          <Card.Body>
            <Card.Title>
              <Row>
                <Col className="ml-n2">
                  <h2>Picaña Haye</h2>
                </Col>
                <Col>
                  <Badge className="badge ml-4" variant="primary">
                    El más pedido
                  </Badge>
                </Col>
              </Row>
            </Card.Title>
            <Card.Text>
              <p1>Deliciosa Picaña Haye</p1>
            </Card.Text>
            <Card.Text>
              <p1>$365.00</p1>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Form>
        <Row>
          <Col className="mesa">
            <DropdownButton>
              <Dropdown.Item>Selecciona un menu</Dropdown.Item>
              {menusrestaurante
                .filter((menu) => menu.disponible)
                .map((menu) => (
                  <Dropdown.Item onClick={() => seleccionarMenu(menu)}>
                    {menu.nombre}
                  </Dropdown.Item>
                ))}
            </DropdownButton>
          </Col>
        </Row>
      </Form>
      {menuEscogido ? <Menu menu={menu} /> : <p>Escoge un menu</p>}
    </div>
  );
}

export default MenuDigital;
