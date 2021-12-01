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
import Carrousel from "./Carrousel";

import restauranteContext from "../context/restaurantes/restauranteContext";
import mesasContext from "../context/mesas/mesasContext";
import menusContext from "../context/menus/menusContext";
import sesionGeneralContext from "../context/sesionesGenerales/sesionGeneralContext";
import sesionIndividualContext from "../context/sesionesIndividuales/sesionIndividualContext";
import platillosContext from "../context/platillos/platillosContext";

import Menu from "./Menu";

import "./Menu/menucliente.css";
import Papas from "./papas-gajo.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Menu/menucliente.css";
import { Divider } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

  const platillossContext = useContext(platillosContext);
  const {
    platillosseccion,
    platillosrestaurante,
    platillo,
    obtenerPlatillos,
    guardarPlatilloActual,
    obtenerPlatillosRestaurante,
  } = platillossContext;

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
    obtenerPlatillosRestaurante(restaurante);
    obtenerSesionGeneral(mesa[0]._id);
    localStorage.setItem("mesaNombre", mesa[0].numero);

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
  }, []);
  localStorage.setItem("restaurantelocal", restaurante);
  console.log(sesiongeneralmesa);

  return (
    <div className="menu-principal">
      <h1>{restaurantes.nombre}</h1>
      <p>{mesa[0].numero}</p>
      <Link to={"/Orden"}>
        <ShoppingCartIcon className="carrito-menu" />
      </Link>
      {/*
  <InputGroup className="searchbar">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <SearchIcon />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="text" placeholder="Busca un platillo" />
      </InputGroup>
*/}
      <h2>Lo más recomendado</h2>
      {/*
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
*/}
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        swipeable={true}
        showStatus={false}
      >
        {platillosrestaurante
          .filter((platillo) => platillo.favorito == true)
          .map((platillofavorito) =>
            platillofavorito ? (
              <Carrousel platillofavorito={platillofavorito} />
            ) : (
              <p>No hay platillos favoritos</p>
            )
          )}
      </Carousel>
      {menusrestaurante
        .filter((menu) => menu.disponible == true)
        .map((menudisponible) =>
          menudisponible ? (
            <Menu menudisponible={menudisponible} />
          ) : (
            <p>No hay menu dispnible</p>
          )
        )}
    </div>
  );
}

export default MenuDigital;
