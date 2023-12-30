import React, { useState } from "react";
import { ChromePicker } from "react-color";

const Styling = () => {
  const columnList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [color, setColor] = useState("#ff0000");
  const [num, setNum] = useState(1);

  const handleColorChange = (num, colorToSet) => {
    setColor(colorToSet.hex);

    if (num === 1) {
      document.documentElement.style.setProperty("--primary-color", color);
    } else if (num === 2) {
      document.documentElement.style.setProperty("--secondary-color", color);
    } else if (num === 3) {
      document.documentElement.style.setProperty("--tertiary-color", color);
    }
  };

  return (
    <>
      <div>
        <div>
          <button
            onClick={() => setNum(1)}
            className={num === 1 ? "selected" : "unselected"}
          >
            Primary Color
          </button>
          <button
            onClick={() => setNum(2)}
            className={num === 2 ? "selected" : "unselected"}
          >
            Secondary Color
          </button>
          <button
            onClick={() => setNum(3)}
            className={num === 3 ? "selected" : "unselected"}
          >
            Tertiary Color
          </button>
        </div>
        <ChromePicker
          disableAlpha={true}
          color={color}
          onChange={(color) => handleColorChange(num, color)}
        />
      </div>
      <div>
        <button
          onClick={() => setNum(4)}
          className={num === 4 ? "selected" : "unselected"}
        >
          Columns
        </button>
        {columnList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );
};

export default Styling;
