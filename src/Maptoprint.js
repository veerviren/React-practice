import React from 'react'

function Maptoprint() {
  return (
      <>
          <h1>Using Map to Print items</h1>
          <ul>
              {["apple", "banana", "cherry", "date", "elderberry"].map((item) => (
                  <li key={item}>{item}</li>
              ))}
            </ul>
      </>
  )
}

export default Maptoprint