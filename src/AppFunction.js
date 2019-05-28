import React, { useState, useEffect } from "react";

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
};
// useState = this.state
// useEffect = interacting with APIs, Data Fetching, Setting up subscription, working with browser API (Side Effects), interaction with outside of the world =======> To use side effects inside of function component
const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);

  //Javascript Destructuring Method
  const [{ latitude, longitude, speed }, setLocation] = useState(
    initialLocationState
  );

  // const [location, setLocation] = useState(initialLocationState);
  let mounted = true;

  //By default after each render how this want to be
  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    // Creating new function to return after the previous side effect. That's why we use return() function to initiate after the previous function gets done.
    // We tell useEffect what we want to be done prior to our component being unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };

    // If we want to run the sideeffect(useEffect) less frequently, we can provide a second arguement which is in array of values
    // If we give nothing inside of the array, the state {count} value no longer works.
    // so we give in the exception of saying [count] to make the exception to {count} be working
  }, [count]);

  const handleGeolocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      });
    }
  };

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };

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
      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />

      <h2>Network Status</h2>
      <p>
        You are <strong>{status ? "online" : "offline"}</strong>
      </p>

      <h2>Geolocation</h2>
      <p>Latitude is {latitude}</p>
      <p>Longitude is {longitude}</p>
      <p>Your speed is {speed ? speed : "0"}</p>
    </>
  );
};

export default App;
