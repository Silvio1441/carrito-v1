import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart} = useCustomContext(1)
    const [quantity, setQuantity] = useState(initialValue)
  return (
    <>
    <div>
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
    </div>
    <button onClick={() => addProductCart(id, quantity)}>Confirmar</button>
    </>
  )
}

export default Counter