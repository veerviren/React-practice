import React from 'react'
import { useState } from 'react'

function ToogleContent() {

    const [content, setContent] = useState("Click to change content")

    function changeContent() {
        if (content === "Click to change content") {
          setContent("Hello World");
        } else {
          setContent("Click to change content");
        }
    }

  return (
      <>
          <h1>Toogle Content</h1>
          <button onClick={changeContent}>Toggle</button>
          <p>{ content}</p>
          
      </>
  )
}

export default ToogleContent