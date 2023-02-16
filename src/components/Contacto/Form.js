import React from "react";
import "./contacto.css";

export const Form = () => {
  return (
    <div className="container">
      <h2>
        Queremos estar más cerca de vos, conocer tus comentarios y opiniones
      </h2>

      <form>
        <div className="estiloH">Nombre:</div>
        <input type="text" name="nombre" placeholder="Nombre" />

        <div class="estiloH">Email:</div>
        <input type="Email" name="Email" placeholder="Ingrese su Email" />

        <div className="estiloH">Deje aquí sus comentarios:</div>
        <textarea
          name="Consultas"
          id="Consultas"
          cols="25"
          rows="10"
        ></textarea>

        <div>
          <input
            className="btn btn-dark mx-2 my-3"
            type="submit"
            value="Enviar formulario"
          />
          <input
            className="btn btn-dark mx-2 my-3"
            type="reset"
            value="Limpiar formulario"
          />
        </div>
      </form>
    </div>
  );
};
