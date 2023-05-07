import React, { useState } from "react";

function CheckList() {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleItemClick(item) {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  return (
    <>
      <h1>Check List</h1>
      <div className="checklist-container">
        <ul>
          {["apple", "banana", "cherry", "date", "elderberry"].map((item) => (
            <li key={item}>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleItemClick(item)}
              />
              {item}
            </li>
          ))}
        </ul>
        <div className="selected-items">
          <h2>Selected Items:</h2>
          <ul>
            {selectedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CheckList;
