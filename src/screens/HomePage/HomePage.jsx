import React, { useEffect, useState } from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import { ProductCard } from "../../components";

const HomePage = () => {
  const {products} = useCustomContext()
  const [searchProduct, setSearchProduct] = useState("")
  const[currentProducts, setCurrentProducts] =useState(products)

  useEffect(() => {
    setCurrentProducts(products.filter(producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase())))
  }, [searchProduct])
    return (
        <div>
          <h1>Lista de productos</h1>

            <input placeholder="Busca el no,bre del producto" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
            <div>
              <h2>Precio</h2>
              <div>
              <input type="number" />
              <input type="number" />
              </div>
            </div>
          <div>
            {currentProducts.map(producto => (
            <ProductCard  producto = {producto} key={producto.id}/>
                ))}
          </div>  
        </div>
    )
}

export default HomePage