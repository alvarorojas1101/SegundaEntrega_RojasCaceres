import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { Loader } from "../Loader/Loader";
import { UIContext } from "../../context/UIContext";
import { generarOrden } from "../../firebase/generarOrden";

export const Checkout = () => {
  const { loading, setLoading } = useContext(UIContext);
  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre.length < 3) {
      alert("Nombre inválido");
      return;
    }
    if (values.email.length < 3) {
      alert("Email inválido");
      return;
    }
    if (values.tel.length < 7) {
      alert("Teléfono inválido");
      return;
    }

    setLoading(true);
    generarOrden(values, carrito, calcularTotal())
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Su orden se registró con éxito!",
          text: `Guarde su número de orden: ${res}`,
          willClose: () => {
            vaciarCarrito();
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Producto sin stock",
          text: `No hay stock de: ${err.map((el) => el.name).joing(", ")}`,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {carrito.length === 0 && <Redirect to="/" />}
      {loading && <Loader />}

      <div>
        <h2>Complete sus datos</h2>
        <hr />
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <h2>Datos de mi compra</h2>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Nombre y apellido"
              name="nombre"
              value={values.nombre}
              onChange={handleInputChange}
            />
            {values.nombre.length === 0 && (
              <small>Este campo es obligatorio</small>
            )}

            <input
              className="form-control my-2"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            {values.email.length === 0 && (
              <small>Este campo es obligatorio</small>
            )}

            <input
              className="form-control my-2"
              type="tel"
              placeholder="Teléfono"
              name="tel"
              value={values.tel}
              onChange={handleInputChange}
            />
            {values.tel.length === 0 && (
              <small>Este campo es obligatorio</small>
            )}

          </form>
          <button
              className="btn btn-dark"
              type="submit"
              disabled={loading}
            >
              Finalizar compra
            </button>
        </div>
      </div>
    </>
  );
};
