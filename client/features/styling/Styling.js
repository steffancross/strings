import React, { useState } from "react";
import { ChromePicker } from "react-color";

const Styling = () => {
  const [color, setColor] = useState("#ff0000");
  const [num, setNum] = useState(1);

  const handleColorChange = (num, colorToSet) => {
    setColor(colorToSet.hex);

    if (num === 1) {
      document.documentElement.style.setProperty("--primary-color", color);
    } else if (num === 2) {
      document.documentElement.style.setProperty("--secondary-color", color);
    } else {
      document.documentElement.style.setProperty("--tertiary-color", color);
    }
  };

  return (
    <>
      <div>
        <div>
          <button onClick={() => setNum(1)}>Primary Color</button>
          <button onClick={() => setNum(2)}>Secondary Color</button>
          <button onClick={() => setNum(3)}>Tertiary Color</button>
        </div>
        <ChromePicker
          disableAlpha={true}
          color={color}
          onChange={(color) => handleColorChange(num, color)}
        />
      </div>
      <div>
        <p>Columns</p>
      </div>
    </>
  );
};

export default Styling;
