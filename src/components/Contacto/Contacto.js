import React from "react";
import { Form } from "./Form";

export const Contacto = () => {
  return (
    <div className="container ">
      <h2 className="titulo"></h2>

      <div className="contactoDiv container">
        <h2 className="centrar">
          Ubicación: Capital Federal
          <h3 className="centrar">Telefono: +51 911 3315 7182</h3>
          <iframe
            className="imgDetail"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.69039529958!2d-58.410900885194856!3d-34.61198966544203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf1a0ea4a31%3A0xbf69ef05ffa546fe!2sLa%20Rioja%20122!5e0!3m2!1ses!2spy!4v1602457682136!5m2!1ses!2spy"
          ></iframe>
        </h2>

        <div className="formDetail container">
          <Form />
        </div>
      </div>
    </div>
  );
};
