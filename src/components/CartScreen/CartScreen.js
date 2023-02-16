import React, {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import "./cart.css"
import { ItemCount } from '../ItemCount/ItemCount'
import { Link} from "react-router-dom";




export const CartScreen = ({stock}) => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal , push}= useContext(CartContext)


    const {addToCart} = useContext(CartContext)

    const [cantidad,setCantidad] = useState(0)


    const handleAgregar = () => {
        const newItem = {
           
            cantidad
        }

        if(cantidad > 0){
            addToCart(newItem)
           }

    }

    return (
        <div className="container my-5">

        {
            carrito.length === 0
            ? <>
                <h2 className="alert titulo">No hay productos en tu carrito</h2>
                <Link to= "/" className= "btn-btn dark link Ir mb-5" >Ir a comprar</Link>

                </>
            :

            <>
            <h2 className="alingCart titulo">Mi compra</h2>
            
        {
            carrito.map((prod) => (  
                <div className="product-detail container">
                    <h4 className="Text">{prod.name}</h4>

                    <div className=" descriptionDetail">
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio: {prod.price * prod.cantidad}</p>
                    <>
           
            </>

                    <div className=" descriptionDetail">
                    
                    <button className="btn btn-dark my-3 " onClick={() => removeItem(prod.id)}>
                        <BsFillTrashFill/>
                    </button>
                </div>

                </div>
                </div>

            ))
        }
           
        <h3 className="Cart Total">Precio Total: ${calcularTotal()}  </h3>


        <button
        className="btn btn-dark buttonAling"
        onClick={vaciarCarrito}>
            Vaciar Carrito
        </button>

        <Link to= "/checkout" className="btn btn-dark mx-3">
            Terminar compra
        </Link>


        
                    </>
            } 

    </div>
    )
}

