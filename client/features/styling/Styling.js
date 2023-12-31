import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import { editStyles } from "./stylingSlice";
import { motion } from "framer-motion";

const Styling = () => {
  const dispatch = useDispatch();
  const columnList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [selectedColumn, setSelectedColumn] = useState(columns);
  const [color, setColor] = useState("#000");
  const [styleMode, setStyleMode] = useState(1);
  const userId = useSelector((state) => state.auth.me.id);
  const primaryColor = useSelector((state) => state.styles.primaryColor);
  const secondaryColor = useSelector((state) => state.styles.secondaryColor);
  const tertiaryColor = useSelector((state) => state.styles.tertiaryColor);
  const columns = useSelector((state) => state.styles.columns);

  useEffect(() => {
    updateDbWithStyles();
  }, [selectedColumn]);

  const handleColorChange = (num, colorToSet) => {
    setColor(colorToSet.hex);

    if (styleMode === 1) {
      document.documentElement.style.setProperty("--primary-color", color);
    } else if (styleMode === 2) {
      document.documentElement.style.setProperty("--secondary-color", color);
    } else if (styleMode === 3) {
      document.documentElement.style.setProperty("--tertiary-color", color);
    }
  };

  const updateDbWithStyles = () => {
    const styleUpdate = {
      primaryColor: styleMode === 1 ? color : primaryColor,
      secondaryColor: styleMode === 2 ? color : secondaryColor,
      tertiaryColor: styleMode === 3 ? color : tertiaryColor,
      columns: styleMode === 4 ? selectedColumn : columns,
      userId,
    };

    dispatch(editStyles(styleUpdate));
  };

  return (
    <>
      <motion.div
        className="popup"
        initial={{ opacity: 0, y: "-40%", x: "-50%" }}
        animate={{ opacity: 1, y: "-50%", x: "-50%" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <button
            onClick={() => setStyleMode(1)}
            className={styleMode === 1 ? "selected-color" : "unselected-color"}
          >
            Primary Color
          </button>
          <button
            onClick={() => setStyleMode(2)}
            className={styleMode === 2 ? "selected-color" : "unselected-color"}
          >
            Secondary Color
          </button>
          <button
            onClick={() => setStyleMode(3)}
            className={styleMode === 3 ? "selected-color" : "unselected-color"}
          >
            Tertiary Color
          </button>
          <button
            onClick={() => setStyleMode(4)}
            className={styleMode === 4 ? "selected-color" : "unselected-color"}
          >
            Columns
          </button>
        </div>
        <div>
          {styleMode === 4 ? (
            <div id="columns">
              {columnList.map((item, index) => (
                <p
                  key={index}
                  className={selectedColumn === item ? "selected-column" : ""}
                  onClick={() => setSelectedColumn(item)}
                >
                  {item}
                </p>
              ))}
            </div>
          ) : (
            <ChromePicker
              disableAlpha={true}
              color={color}
              onChange={(color) => handleColorChange(styleMode, color)}
              onChangeComplete={() => updateDbWithStyles()}
            />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Styling;
