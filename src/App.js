import React, { Fragment, useState } from "react";
import Header from "./componente/Header";
import Formulario from "./componente/Formulario";
import Mensaje from "./componente/Mensaje";
import Resultado from "./componente/Resultado";
import Spiner from "./componente/Spiner";

function App() {

  //Definiciendo State

  const [cantidad, guardarCantidad] = useState(0)
  const [plazo, guardarPlazo] = useState('')
  const [total, totalPagar] = useState(0)

  const [cargando, guardarCargando] = useState(false)


  let mensaje
  if(cargando){
    mensaje = <Spiner/>
  }
  else if(total === 0){
    mensaje = <Mensaje/>
  }else{
    mensaje = <Resultado
      cantidad = {cantidad}
      total = {total}
      plazo = {plazo}
      
    />
  }

  return (

    <Fragment>
      <Header
        titulo="Cotizador de prestamos"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          totalPagar={totalPagar}
          guardarCargando={guardarCargando}

        />
        <div className="mensajes">
          {mensaje}
        </div>

      </div>
    </Fragment>


  );
}



export default App;
