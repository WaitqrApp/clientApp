import React, {Fragment} from "react";

function Carrousel({platillofavorito}){
    return(
        
        <div>
        <img src={platillofavorito.imagenPlatillo} />
        <p className="legend">{platillofavorito.nombre}<br></br>{platillofavorito.descripcion}</p>
        
    </div>
    );
}

export default Carrousel;