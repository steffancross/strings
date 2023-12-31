import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import { editStyles } from "./stylingSlice";

const Styling = () => {
  const dispatch = useDispatch();
  const columnList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [color, setColor] = useState("#ff0000");
  const [num, setNum] = useState(1);
  const userId = useSelector((state) => state.auth.me.id);
  const primaryColor = useSelector((state) => state.styles.primaryColor);
  const secondaryColor = useSelector((state) => state.styles.secondaryColor);
  const tertiaryColor = useSelector((state) => state.styles.tertiaryColor);
  const columns = useSelector((state) => state.styles.columns);

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

  const updateDbWithStyles = () => {
    const styleUpdate = {
      primaryColor: num === 1 ? color : primaryColor,
      secondaryColor: num === 2 ? color : secondaryColor,
      tertiaryColor: num === 3 ? color : tertiaryColor,
      columns,
      userId,
    };

    dispatch(editStyles(styleUpdate));
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
          <button
            onClick={() => setNum(4)}
            className={num === 4 ? "selected" : "unselected"}
          >
            Columns
          </button>
        </div>
        <div>
          {num === 4 ? (
            <div id="columns">
              {columnList.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          ) : (
            <ChromePicker
              disableAlpha={true}
              color={color}
              onChange={(color) => handleColorChange(num, color)}
              onChangeComplete={() => updateDbWithStyles()}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Styling;
