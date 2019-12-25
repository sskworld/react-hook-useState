import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter Example</h1>
      <p className="Count">{count}</p>
      <button className="Button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="Button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
