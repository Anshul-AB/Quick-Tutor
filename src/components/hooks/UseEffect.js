import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [toggle, setToggle] = useState(false);
  const visible = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <div className="explain">
        "useEffect" helps you do things when your component is shown or updated,
        and the cleanup part helps you tidy up or stop any ongoing tasks before
        the component changes or disappears. It's like preparing things when
        needed and cleaning up after yourself. (see console logs)
      </div>
      <br/>
      <button className="btn" onClick={visible}>
        See Time
      </button>
      <div>{toggle ? <Time /> : ""}</div>
    </div>
  );
};

// component
const Time = () => {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional Component");
  const showDate = () => {
    setTime(new Date().toString());
  };

  useEffect(() => {
    console.log("Component Mounted or Updated");
    const interval = setInterval(showDate, 1000);
    // console.log("Time");

    return () => {
      console.log("Cleanup Interval");
      clearInterval(interval);
    };
  }, []);
  //   [] -> render only once
  // [dependency] -> render only on this dependency

  return (
    <div>
      <div>{time}</div>
      <button className="btn" onClick={showDate}>
        Update Time
      </button>
      <button
        className="btn"
        onClick={() => setMessage("Changed Functional Component")}
      >
        Functional Component
      </button>
      <div>{message}</div>
    </div>
  );
};

export default UseEffect;
