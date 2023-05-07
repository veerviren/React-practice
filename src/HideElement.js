import React from "react";
import { useState } from "react";

function HideElement() {
  const [hide, setHide] = useState(false);
  const [btn, setBtn] = useState("Hide");
  function handleHide() {
      if (hide === true) {
        setBtn("Hide");
      setHide(false);
      } else {
          setBtn("Show");
      setHide(true);
    }
  }
  return (
    <>
      <h1>Hide Element</h1>
      {hide ? "" : <p>You can hide me on clicking button!</p>}
      <button onClick={handleHide}>{btn}</button>
    </>
  );
}

export default HideElement;
