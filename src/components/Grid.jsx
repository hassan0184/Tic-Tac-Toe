import { useState, useRef } from "react";
import GridBox from "./GridBox";
/* eslint-disable */
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Grid = () => {
  const [OnTurn, setTurn] = useState("X");
  const BoxRef = useRef(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [finishedGame, setFinishedGame] = useState(false);

  const winnerCheck = () => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;

      if (
        BoxRef.current[a] &&
        BoxRef.current[a] === BoxRef.current[b] &&
        BoxRef.current[a] === BoxRef.current[c]
      ) {
        return BoxRef.current[a];
      }
    }
    return null;
  };

  const checkFinished = () => {
    for (const item of BoxRef.current) {
      if (item === null) {
        return false;
      }
    }
    return true;
  };

  const handleClick = (boxNum) => {
    if (BoxRef.current[boxNum] === null && !winner) {
      BoxRef.current[boxNum] = OnTurn;
      setTurn(OnTurn === "X" ? "O" : "X");

      const winner = winnerCheck();
      if (winner) {
        setWinner(winner);
        return;
      }

      const finished = checkFinished();
      if (finished) {
        setFinishedGame(finished);
      }
    }
  };

  const resetGame = () => {
    setWinner(null);
    setFinishedGame(false);
    BoxRef.current = Array(9).fill(null);
    setTurn("X");
  };

  const handleReset = () => {
    resetGame();
  };

  return (
    <>
      <div>
        <h1 className="text-5xl p-2 m-6">Turn of {OnTurn}</h1>
      </div>
      <div className="flex justify-center">
        <table>
          <tbody>
            <tr>
              <GridBox
                number={0}
                turn={BoxRef.current[0]}
                handleClick={handleClick}
              />
              <GridBox
                number={1}
                turn={BoxRef.current[1]}
                handleClick={handleClick}
              />
              <GridBox
                number={2}
                turn={BoxRef.current[2]}
                handleClick={handleClick}
              />
            </tr>
            <tr>
              <GridBox
                number={3}
                turn={BoxRef.current[3]}
                handleClick={handleClick}
              />
              <GridBox
                number={4}
                turn={BoxRef.current[4]}
                handleClick={handleClick}
              />
              <GridBox
                number={5}
                turn={BoxRef.current[5]}
                handleClick={handleClick}
              />
            </tr>
            <tr>
              <GridBox
                number={6}
                turn={BoxRef.current[6]}
                handleClick={handleClick}
              />
              <GridBox
                number={7}
                turn={BoxRef.current[7]}
                handleClick={handleClick}
              />
              <GridBox
                number={8}
                turn={BoxRef.current[8]}
                handleClick={handleClick}
              />
            </tr>
          </tbody>
        </table>
      </div>
      {winner && (
        <>
          <h1 className="text-5xl p-2 m-2">{winner} Won</h1>
          <button
            onClick={handleReset}
            className="border-2 p-2 rounded-lg border-black bg-slate-300"
          >
            Reset Game
          </button>
        </>
      )}
      {finishedGame && (
        <>
          <h1 className="text-5xl p-2 m-2">Draw!</h1>
          <button
            onClick={handleReset}
            className="border-2 p-2 rounded-lg border-black bg-slate-600"
          >
            Reset Game
          </button>
        </>
      )}
    </>
  );
};

export default Grid;
