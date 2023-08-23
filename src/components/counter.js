import React, { useCallback } from "react";
import { useState } from "react";
import "./counter.css";
const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1 className="countLayout">{count}</h1>
      <button className="buttonIncrement" onClick={increment}>
        increment
      </button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
