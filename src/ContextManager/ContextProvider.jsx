import React,{createContext, useContext, useState} from "react";

const Context = createContext()

const ContextProvider = ({children}) => {
    const products = [
        {
            nombre: "Apple Mac Book Pro",
            imagen: <img src="https://tse1.mm.bing.net/th?id=OIP.jvDj0ft5SCN36ZSWEIJJYQHaHa&pid=Api&P=0&h=180" />,
            categoria: "LAPTOPS",
            precio: 1200,
            id: 1,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, reprehenderit vitae? At saepe veritatis fugiat molestias repellendus praesentium eaque fuga placeat adipisci, necessitatibus amet ipsum laboriosam explicabo dolorum porro quae."
        },
        {
            nombre: "iPad Pro 11",
            imagen: <img src="https://betasystem.net/wp-content/uploads/2018/11/ipad-pro-12-select-wifi-spacegray-202003_GEO_ES_FMT_WHH.png" width="200" />,
            categoria: "TABLETS",
            precio: 950,
            id: 2,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, reprehenderit vitae? At saepe veritatis fugiat molestias repellendus praesentium eaque fuga placeat adipisci, necessitatibus amet ipsum laboriosam explicabo dolorum porro quae."
        },
        {
            nombre: "Monitor Samsung Qled 4K",
            imagen: <img src="https://www.bhphotovideo.com/images/images2500x2500/samsung_qn75q80aafxza_q80a_75_class_hdr_1620629.jpg" width="200" />,
            categoria: "COMPUTERS",
            precio: 750,
            id: 3,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, reprehenderit vitae? At saepe veritatis fugiat molestias repellendus praesentium eaque fuga placeat adipisci, necessitatibus amet ipsum laboriosam explicabo dolorum porro quae."
        },
        {
            nombre: "Samsung Galaxy S23 Ultra",
            imagen: <img src="https://tse1.mm.bing.net/th?id=OIP.JkUSeWkcu1Ckn_uUgckSwQHaHa&pid=Api&P=0&h=180" width="200" />,
            categoria: "PHONES",
            precio: 500,
            id: 4,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, reprehenderit vitae? At saepe veritatis fugiat molestias repellendus praesentium eaque fuga placeat adipisci, necessitatibus amet ipsum laboriosam explicabo dolorum porro quae."    
        },
        {
            nombre: "Microsoft Surface Studio",
            imagen: <img src="https://i5.walmartimages.com/asr/d3d7a6c7-18cc-41fa-b4ef-062a21808331.8110f32469fc1f3c8d116ac890bdd4d4.jpeg" width="200" />,
            categoria: "TABLETS",
            precio: 800,
            id: 5,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, reprehenderit vitae? At saepe veritatis fugiat molestias repellendus praesentium eaque fuga placeat adipisci, necessitatibus amet ipsum laboriosam explicabo dolorum porro quae."
        },
        {
            nombre: "Samsung Watch",
            imagen: <img src="https://img.globaldata.pt/products/SM-R870NZKAEUB_1.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=1246&h=1246" width="200" />,
            categoria: "WATCHES",
            precio: 450,
            id: 6,
            stock: 8,
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, reprehenderit vitae? At saepe veritatis fugiat molestias repellendus praesentium eaque fuga placeat adipisci, necessitatibus amet ipsum laboriosam explicabo dolorum porro quae."
        }

    ]

    const getProductById = (id) => {
        return products.find(producto => producto.id === Number(id))
    }

    const getProductCartById = (id) => {
        return cart.find(producto => producto.id === Number(id))
    }

    /*El estado del array de objetos del carrito*/
    
const [cart, setCart] = useState([])
const isInCart = (id) => cart.some(producto => producto.id === Number(id))

const addProductCart = (id, quantity) => {
    if(isInCart(id)){
        console.log("Ya existe");
        setCart(cart.map(product => {
            if(product.id == id){
                product.quantity = quantity
            }
            return product
        }))
    }else{
        setCart([...cart, {...getProductById(id), quantity : quantity}])
        }  
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio*product.quantity)
        return total
    }

    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
           {children}
        </Context.Provider>
    )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider