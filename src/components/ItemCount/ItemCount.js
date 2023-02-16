import React from "react";

export const ItemCount = ({ cantidad, modify, max }) => {
  const handleRestar = () => {
    if (cantidad > 1) {
      modify(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < max) modify(cantidad + 1);
  };

  return (
    <div>
      <button onClick={handleRestar} className="btn btn-light mx-3 my-2 ">
        -
      </button>

      <span className="mx-3">{cantidad}</span>

      <button onClick={handleSumar} className="btn btn-light mx-3 my-2 ">
        +
      </button>
    </div>
  );
};
