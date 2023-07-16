import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components';

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
    console.log(getTotal);
  return (
    <div>
        CartPage
        <div>
            {
                cart.map(product => (
                  <ProductCartCard key={product.id} producto={product}/>
                ))
            }
        </div>
        Total: {getTotal()}
    </div>
  )
}

export default CartPage