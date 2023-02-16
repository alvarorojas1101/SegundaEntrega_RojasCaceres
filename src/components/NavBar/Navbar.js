import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { CartWidget } from "./CartWidget";
import "./NavBar.css";
import { Logo } from "../../data/img";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <NavLink hexact to="/">
        <img className="estiloLogo" src={Logo} alt="Logo" />
      </NavLink>
      <Nav>
        <NavLink activeClassName={"link"} exact to="/" className="a">
          Inicio
        </NavLink>
        <NavLink
          activeClassName={"link"}
          exact
          to="/productos/vacuno"
          className="a"
        >
          Vacuno
        </NavLink>
        <NavLink
          activeClassName={"link"}
          exact
          to="/productos/aves"
          className="a"
        >
          Aves
        </NavLink>
        <NavLink
          activeClassName={"link"}
          exact
          to="/productos/cerdo"
          className="a"
        >
          Cerdo
        </NavLink>
        <NavLink activeClassName={"link"} exact to="/contacto" className="a">
          Contacto
        </NavLink>

        <Link to="/cart">
          <CartWidget />
        </Link>
      </Nav>
    </Navbar>
  );
};
