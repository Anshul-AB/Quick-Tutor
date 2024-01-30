import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [num, setNum] = useState(1);
  const [name, setName] = useState("");

  const result = useMemo(() => {
    return factorial(num);
  }, [num]);

  return (
    <div className="App">
      <div className="explain">
        USES:
        <br />
        1. Optimise Expensive Operation.
        <br />
        2. Referential Equality.
        <br />
        [React.Memo is a HOC (Higher-Order Component) used to memoize functional
        components. When you wrap a functional component with React.memo, it
        will only re-render if its props have changed.]
        <br/>
        <div>
        Memoization is a technique to speed up functions by remembering and
        reusing their previous results when given the same inputs, avoiding
        redundant computations. In React, it's used to optimize rendering and
        avoid unnecessary component updates.
      </div>
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
      <DisplayName name={name} />
      
    </div>
  );
};

const DisplayName = React.memo(({ name }) => {
  // React.Memo It is a HOC (Higher-Order Component) used to memoize functional components.
  //When you wrap a functional component with React.memo, it will only re-render if its props have changed.
  console.log("rendered");
  return <label>Enter Name : {name}</label>;
});

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

export default UseMemo;
