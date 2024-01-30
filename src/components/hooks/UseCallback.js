import React, { useCallback, useEffect, useMemo, useState } from "react";

const UseCallback = () => {
  const [num, setNum] = useState(1);
  const [name, setName] = useState("");

  const result = useMemo(() => {
    return factorial(num);
  }, [num]);
  console.log("useMemo :", result);

  const displayName = useCallback(() => {
    return name;
  }, [name]);
  console.log("useCallback :", displayName);

  return (
    <div className="App">
      <div className="explain">
      <div>
        Memoization is a technique to speed up functions by remembering and
        reusing their previous results when given the same inputs, avoiding
        redundant computations. In React, it's used to optimize rendering and
        avoid unnecessary component updates.<br/><br/>
      </div>
        USES:
        <br />
        1. Memoize the function (useCallback) vs Memoize the value (useMemo). [see console logs]
        <br />
        2. Referential Equality for function.
      </div>

      <hr />
      {/* Counter */}
      <div>
        {" "}
        Factorial of {num} is : {result}
      </div>
      <div>
        {" "}
        <button className="btn" onClick={() => setNum(num - 1)}>
          {" "}
          -{" "}
        </button>
        <button className="btn" onClick={() => setNum(num + 1)}>
          {" "}
          +{" "}
        </button>
      </div>

      <hr />

      {/* Input */}
      <input
        type="text"
        id="name"
        value={name}
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
        className="pad"
      />
      <button className="btn" onClick={() => setName("")}>
        Clear
      </button>
      <hr />
      <DisplayName displayName={displayName} />
      
    </div>
  );
};

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("rendered");
    setValue(displayName());
  }, [value, displayName]);
  return <label>Enter Name : {value}</label>;
};

function factorial(n) {
  let i = 0;
  while (i < 200000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default UseCallback;
