import React, { useContext } from "react";
import { context } from "./context";
import Tile from "./Tile";

const Matrix = () => {
  const { array } = useContext(context);
  return (
    <div className="matrix">
      {array.map((el, index) => (
        <Tile key={index} id={index} value={el}></Tile>
      ))}
    </div>
  );
};

export default Matrix;
