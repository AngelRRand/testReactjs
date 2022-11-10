import React from 'react'

const Resultado = ({ cantidad, total, plazo }) => (
    <div className='resultado'>
        <h3>Resultado Final</h3>
        <p>Su Prestamo de: ${cantidad}</p>
        <p>Se pagara en un total de: ${(total).toFixed(2)}</p>
        <p>Su pago mensual sera de: ${(total/plazo).toFixed(2)}</p>
        <p>Por un periodo de {plazo} meses</p>
    </div>
)

export default Resultado;