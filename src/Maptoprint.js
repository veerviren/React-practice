import React from 'react'

function Maptoprint() {
  return (
      <>
          <h1>Map to Print</h1>
          <ul>
              {["apple", "banana", "cherry", "date", "elderberry"].map((item) => (
                  <li key={item}>{item}</li>
              ))}
            </ul>
      </>
  )
}

export default Maptoprint