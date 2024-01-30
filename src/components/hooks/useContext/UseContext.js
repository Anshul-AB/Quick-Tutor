import React, { useState } from "react";
import FComponent from "./FComponent";
import { CounterContext } from "./CounterContext";

const UseContext = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="App ">
      <div className="explain">
        'useContext' is like a tool that helps your components grab and use the
        data stored in that global storage (context).
        <br />
        <br />
        +-----------------+ <br />
        <p>
          {" "}
          1. Create Box (createContext):
          <br />
          - Create a context using React.createContext() or createContext().
          <br />
          <br />
          2.Fill the Box (Provider):
          <br />
          - Wrap your components with a Provider. Pass the data you want to
          share as the value prop of the Provider.
          <br />
          <br />
          3.Use the Data (useContext):
          <br />- In the components where you need the shared data, use the
          useContext hook to access the data.
        </p>
      </div>
      <div className="border context-App">
        <h4>App Component</h4>
        <h3>{num}</h3>
        <div>
          <button className="btn" onClick={() => setNum(num + 1)}>
            Inc
          </button>
          <button className="btn" onClick={() => setNum(num - 1)}>
            Dec
          </button>
        </div>
        <CounterContext.Provider value={{ num, setNum }}>
          <FComponent />
        </CounterContext.Provider>
      </div>
    </div>
  );
};

export default UseContext;
