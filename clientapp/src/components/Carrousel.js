import React, { Fragment, useContext } from "react";
import "./styles.css";

import platillosContext from "../context/platillos/platillosContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Carrousel({ platillofavorito }) {

  const platillossContext = useContext(platillosContext);
  const {
    platillosseccion,
    platillo,
    obtenerPlatillos,
    guardarPlatilloActual,
  } = platillossContext;

  return (
    <div className="recomendado" onClick={() => guardarPlatilloActual(platillofavorito)}> 
    <Link to={"/DetallePlatillo"}>
      <img
        className="imagen-recomendado "
        src={platillofavorito.imagenPlatillo}
      />
      </Link>
      <Link to={"/DetallePlatillo"}>
      <h1 className="">{platillofavorito.nombre}</h1>
      </Link>
      <Link to={"/DetallePlatillo"}>
      <h4 className="">{platillofavorito.descripcion}</h4>
      </Link>
    </div>
  );
}

export default Carrousel;
