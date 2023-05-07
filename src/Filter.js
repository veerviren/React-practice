import React, { useState } from "react";

function Filter() {
  const [searchQuery, setSearchQuery] = useState("");
  const items = ["apple", "banana", "cherry", "date", "elderberry"];

  const filteredItems = items.filter((item) => item.includes(searchQuery));

  return (
    <>
      <h1>Filter App</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Filter;
