import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div data-testid="component-app">
      <div data-testid="div-counter">{counter}</div>
      <button
        data-testid="increase-button"
        onClick={() => setCounter(counter + 1)}
      >
        increase
      </button>
      <button
        data-testid="decrease-button"
        onClick={() => {
          if (counter === 0) return;
          setCounter(counter - 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

export default App;
