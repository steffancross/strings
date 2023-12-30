import { use } from "chai";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

const Styling = () => {
  const [color, setColor] = useState("#ff0000");

  const handleColorChange = () => {
    document.documentElement.style.setProperty("--primary-color", color);
  };

  return (
    <>
      <div>
        <SketchPicker
          color={color}
          onChange={(color) => setColor(color.hex)}
          onChangeComplete={() => handleColorChange()}
        />
      </div>
    </>
  );
};

export default Styling;
