import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./estilos.css";

export const Item = ({ id, name, price, img, description, category }) => {
  //console.log(props)

  return (
    <Card style={{ width: "18rem" }} className="m-4 ">
      <Card.Img variant="top" src={img} className="tamaño" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Precio: ${price} xKG</Card.Text>
        <Card.Text>Categoria: {category}</Card.Text>

        <Link to={`/detail/${id}`}>
          <Button variant="dark">Lo quiero</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
