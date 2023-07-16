import React from 'react'

const ProductCartCard = ({producto}) => {
  return (
    <div>
            <h2>{producto.nombre}</h2>
            <h3>{producto.imagen}</h3>
            <h3>{producto.precio}</h3>
            <p>{producto.descripcion}</p>
            <p>Cantidad: {producto.quantity}</p>
        <hr />
        </div>
  )
}

export default ProductCartCard