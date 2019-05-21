import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // Based on the Previous Value, it increases correctly
  const incrementCount = () => {
    setCount(preCount => preCount + 2);
  };

  //   const incrementCount = () => {
  //     setCount(count + 1);
  //   };

  return <button onClick={incrementCount}>I was clicked {count} times</button>;
};

export default App;
