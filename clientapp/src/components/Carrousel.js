import React, { Fragment } from "react";
import "./styles.css";

function Carrousel({ platillofavorito }) {
  return (
    <div className="recomendado">
      <img
        className="imagen-recomendado "
        src={platillofavorito.imagenPlatillo}
      />
      <h1 className="">{platillofavorito.nombre}</h1>
      <h4 className="">{platillofavorito.descripcion}</h4>
    </div>
  );
}

export default Carrousel;
