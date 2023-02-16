import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { calcularCantidad } = useContext(CartContext);

  return (
    <div
      className="number"
      style={{
        visibility: calcularCantidad() === 0 ? "hidden" : "visible",
      }}
    >
      <FaShoppingCart className="widget" />
      <span>{calcularCantidad()}</span>
    </div>
  );
};
