import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  // Based on the Previous Value, it increases correctly
  const incrementCount = () => {
    setCount(preCount => preCount + 1);
  };

  //   const incrementCount = () => {
  //     setCount(count + 1);
  //   };

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <>
      <button onClick={incrementCount}>I was clicked {count} times</button>;
      <h2>Toggle Light</h2>
      <div
        onClick={toggleLight}
        style={{
          height: "50px",
          width: "50px",
          background: isOn ? "yellow" : "grey"
        }}
      />
    </>
  );
};

export default App;
