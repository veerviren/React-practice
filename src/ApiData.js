import React, { useState, useEffect } from "react";

function DataFromAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
      );
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.completed ? "Completed" : "Not completed"}</p>
        </div>
      ))}
    </div>
  );
}

export default DataFromAPI;
