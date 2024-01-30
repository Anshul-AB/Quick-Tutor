import React from "react";
import useCustom from "./custom-hooks/useCustom";
import ScreenSize from "./ScreenSize";

const CustomHook = () => {
  const [value, increment, decrement, reset] = useCustom(0);
  return (
    <div className="App">
      <div className="explain">
        Creating a custom hook in React is a way to encapsulate logic that can
        be reused across different components.
        <br /> <br />
        Custom Hook Create -- function useCustomHook(initialValue)
        <br />
        <br />
        In your React components, import and use the custom hook by calling it.
        You can destructure the values or functions returned by the custom hook.
        {/* function MyComponent() {
             const [customValue, updateCustomValue] = useCustomHook('initialValue');
             // Your component logic here
            } */}
      </div>
      <h3>Counter</h3>
      <h2>{value}</h2>
      <div>
        <button className="btn" onClick={increment}>
          +
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={decrement}>
          -
        </button>
      </div>
      <br/>
      <ScreenSize/>
    </div>
  );
};

export default CustomHook;
