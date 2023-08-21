/* eslint-disable react/prop-types */

const GridBox = ({ turn, handleClick, number }) => {
  return (
    <td
      onClick={() => handleClick(number)}
      className="bg-gray-900 w-[6.5rem] h-[6.5rem]"
    >
      {turn === "x" || turn === "X" ? (
        <svg width="100" height="100" className="">
          <line
            x1="20"
            y1="20"
            x2="80"
            y2="80"
            stroke="gray"
            strokeWidth="10"
          />
          <line
            x1="80"
            y1="20"
            x2="20"
            y2="80"
            stroke="gray"
            strokeWidth="10"
          />
        </svg>
      ) : turn === "o" || turn === "O" ? (
        <svg width="100" className="" height="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="gray"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      ) : (
        <></>
      )}
    </td>
  );
};

export default GridBox;
