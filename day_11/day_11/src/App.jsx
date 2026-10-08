import React from "react";
import ImageSlider from "./ImageSlider";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <button onClick={() => setCount(0)}>
        RESET
      </button>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <ImageSlider />

    </div>
  );
}

export default App;