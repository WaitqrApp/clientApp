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
      <h2 className="">{platillofavorito.descripcion}</h2>
    </div>
  );
}

export default Carrousel;
