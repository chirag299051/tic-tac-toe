import React, { useContext } from "react";
import { context } from "./context";

const Tile = ({ value, id }) => {
  const { click } = useContext(context);

  return (
    <div onClick={() => click(value, id)} className="tile">
      {value === 0 ? null : value}
    </div>
  );
};

export default Tile;
