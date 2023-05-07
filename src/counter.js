import React from 'react'
import { useState } from 'react'

function Counter () {
    const [Num, setNum] = useState(0);

    function increase() {
      setNum(Num + 1);
    }

    function decrease() {
      setNum(Num - 1);
    }
    return (
      <>
        <h1>Counter App</h1>
        <h2>Counter Value:</h2>
        <h3>{Num}</h3>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
      </>
    );
}

export default Counter