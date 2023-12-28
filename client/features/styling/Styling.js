import React from "react";

const Styling = () => {
  const handleColorChange = () => {
    document.documentElement.style.setProperty("--primary-color", "red");
  };

  return (
    <>
      <div>
        <h1>primary color</h1>
        <button onClick={() => handleColorChange()}>X</button>
      </div>
    </>
  );
};

export default Styling;
