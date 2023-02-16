import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import "./detail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  id,
  name,
  price,
  img,
  description,
  category,
  stock,
}) => {
  const { goBack } = useHistory();

  const { addToCart, isInCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(0);

  const handleAgregar = () => {
    const newItem = {
      id,
      name,
      price,
      category,
      cantidad,
    };

    if (cantidad > 0) {
      addToCart(newItem);
    }
  };

  return (
    <div className="container">
      <h2 className="titulo">{name}</h2>

      <div className="productD container">
        <img className="imgDetail" src={img} alt={name}></img>

        <div className=" descriptionDetail">
          <p className="estiloParrafo">
            {description}
            <h4>Precio: ${price}</h4>

            {isInCart(id) ? (
              <Link to="/cart" className="btn btn-dark">
                {" "}
                Terminar mi compra
              </Link>
            ) : (
              <>
                <ItemCount
                  cantidad={cantidad}
                  modify={setCantidad}
                  max={stock}
                />

                <button
                  className="btn btn-dark mx-3 my-3"
                  onClick={handleAgregar}
                >
                  Agregar
                </button>
              </>
            )}
            <button
              className=" btn btn-dark mx-3 my-3"
              onClick={() => goBack()}
            >
              {" "}
              Volver{" "}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
