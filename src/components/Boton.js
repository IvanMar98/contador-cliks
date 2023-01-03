import React from "react";
import '../css/Boton.css'
function Boton({texto, esBotonDeClik, manejarClik}){
    return(
        <button className={esBotonDeClik ? 'boton-clic' : 'boton-reinicio'} onClick = {manejarClik}>
            {texto}
        </button>
    );
}
export default Boton;