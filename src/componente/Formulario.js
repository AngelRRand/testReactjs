import React, { Fragment, useState } from "react";
import { calculandoTotal } from "../helper"

const Formulario = (props) => {
    const { cantidad, guardarCantidad, plazo, guardarPlazo, totalPagar, guardarCargando } = props
    //seguir apartir de aqui
    const [error, guardarError] = useState(false)
    const calcularPrestamo = e => {
        e.preventDefault();
        //validacion
        if (cantidad === 0 || plazo === '') {
            guardarError(true)
            return
        }
        //Elimina el mensjae de error
        guardarError(false);
        //Habilidar el spinner
        guardarCargando(true);
        setTimeout(() => {
            //Realiza la cotizacion
            const total = calculandoTotal(cantidad, plazo)
            
            //Una vez calculado, guarda el total
            totalPagar(total)

            //Eliminar Spinner
            guardarCargando(false);
        },3000)


    }

    return (

        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            //Evento que se activa con el click. Devuelve la cantidad colocada en el input
                            onChange={e => guardarCantidad(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            //Evento que se activa con el click. Devuelve la cantidad colocada en el input
                            onChange={e => guardarPlazo(parseInt(e.target.value))}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button u-full-width calcularion"
                        />
                    </div>
                </div>
            </form>


            {(error) ? <p className="error">Debes llenar todos los espacios</p> : null}

        </Fragment>
    );
}

export default Formulario;