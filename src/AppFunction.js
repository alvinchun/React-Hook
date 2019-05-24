import React, { useState, useEffect } from "react";

// useState = this.state
// useEffect = interacting with APIs, Data Fetching, Setting up subscription, working with browser API (Side Effects), interaction with outside of the world =======> To use side effects inside of function component
const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  //By default after each render how this want to be
  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });

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
      <button onClick={incrementCount}>I was clicked {count} times</button>
      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/aaa"
        }
        onClick={toggleLight}
        style={{
          height: "50px",
          width: "50px"
          // background: isOn ? "yellow" : "grey"
        }}
        alt="Flashlight"
      />
    </>
  );
};

export default App;
