import React from "react";

const names = ["Alice", "Bob", "Charlie"];

const NameList = () => {
    
  const nameElements = names.map((name) => {
    return React.createElement("li", null, name);
  });

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "List of Names"),
    React.createElement("ul", null, nameElements)
  );
};

export default NameList;
