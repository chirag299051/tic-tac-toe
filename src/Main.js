import React, { useContext } from "react";
import { context } from "./context";
import Matrix from "./Matrix";

const Main = () => {
  const { playerWon } = useContext(context);

  return (
    <div className="main">
      <div className="tic">tic tac toe</div>
      <Matrix></Matrix>
      {playerWon && <div className="won">{playerWon} Wins</div>}
    </div>
  );
};

export default Main;
