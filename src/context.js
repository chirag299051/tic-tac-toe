import React, { useEffect, useState } from "react";

export const context = React.createContext();

let initArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const AppProvider = ({ children }) => {
  const [array, setArray] = useState(initArr);
  const [turn, setTurn] = useState("X");
  const [value, setValue] = useState();
  //   const [won, setWon] = useState(false)
  const [playerWon, setPlayerWon] = useState(null);

  const click = (value, id) => {
    console.log(value, id);
    if (value !== 0 || value === turn) return;
    else {
      let newArray = [...array.slice(0, id), turn, ...array.slice(id + 1)];
      console.log(newArray);
      setArray(newArray);
    }
    setValue(value);
    // check(value, id);
    setTurn((turn) => (turn === "X" ? "O" : "X"));
  };

  const check = (value) => {
    if (
      (array[0] !== 0 && array[0] === array[1] && array[0] === array[2]) ||
      (array[3] !== 0 && array[3] === array[4] && array[3] === array[5]) ||
      (array[6] !== 0 && array[6] === array[7] && array[6] === array[8]) ||
      (array[0] !== 0 && array[0] === array[3] && array[0] === array[6]) ||
      (array[1] !== 0 && array[1] === array[4] && array[1] === array[7]) ||
      (array[2] !== 0 && array[2] === array[5] && array[2] === array[8]) ||
      (array[0] !== 0 && array[0] === array[4] && array[0] === array[8]) ||
      (array[2] !== 0 && array[2] === array[4] && array[2] === array[6])
    ) {
      console.log(turn === "O" ? "X" : "O", " Wins");
      setPlayerWon(turn === "O" ? "X" : "O");
    } else {
      console.log("else");
    }
    return;
  };

  useEffect(() => {
    check(value);
  }, [value, turn]);

  return (
    <context.Provider value={{ array, click, playerWon }}>
      {children}
    </context.Provider>
  );
};

export default AppProvider;
