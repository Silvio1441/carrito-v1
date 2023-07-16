import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"

const ProductCard = ({producto}) => {
    return (
        <div className="contenedor-principal">
        <div>
            <h3>{producto.imagen}</h3>
            <h3>{producto.categoria}</h3>
            <h2>{producto.nombre}</h2>
            <h3>${producto.precio}</h3>
            {/* <p>{producto.descripcion}</p> */}
            <Link to={"/detail/" + producto.id}>Ver detalle</Link>
        <hr />
        </div>
        </div>
    )
}

export default ProductCard