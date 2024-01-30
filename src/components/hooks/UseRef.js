import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  /* 
    1. DOM reference (focus on input)
    2. useRef for storing previous state
    3. hold mutable value , prevent re-render of the component
    */

  const [name, setName] = useState("");
  const [random, setRandom] = useState(0);
  const inputEl = useRef("");
  const prevNumberRef = useRef("");

  const reset = (e) => {
    e.preventDefault();
    setName("");
    inputEl.current.focus();
    // inputEl.current.value="Anshul" // this is the wrong way , dont do it it doesnt update the state
  };

  const randomNumber = () => {
    setRandom(Math.floor(Math.random() * 100));
  };

  //   Hold the previous number
  useEffect(() => {
    prevNumberRef.current = random;
  }, [random]);

  return (
    <div className="App">
      <div className="explain">
        Use Cases: <br /> <br />
        1. DOM reference (focus on input) [Never use useRef to Update the input
        value]. <br />
        2. To store the previous value.
        <br />
        3. hold mutable value , prevent re-render of the component.<br/>
        (When useRef value changes the component doesn't get re-render,<br/>
        only when the useState value changes the component re-renders)
      </div>

      {/* To Focus on input element */}
      <form onSubmit={reset}>
        <input
          ref={inputEl}
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pad"
        />
        <button className="btn">Reset</button>
      </form>
      <div>Hi, My name is {name}</div>

      <hr />

      {/* To store previous value */}
      <h2>Random Number : {random}</h2>

      {prevNumberRef.current !== "Undefined" && (
        <h3>Previous Number : {prevNumberRef.current}</h3>
      )}

      <button className="btn" onClick={randomNumber}>
        Generate Number{" "}
      </button>
    </div>
  );
};

export default UseRef;
