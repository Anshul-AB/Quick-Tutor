import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const FComponent = () => {
  const {num, setNum} = useContext(CounterContext)
  return (
    <div>
      <div className="border context-App">
        <h4>Function Component</h4>
        <h3>{num}</h3>
        <div>
        <button className='btn' onClick={()=> setNum(num + 1)}>Inc</button>
        </div>
        <Fchild />
      </div>
    </div>
  );
};

const Fchild = () => {
  const {num, setNum} = useContext(CounterContext)
  return (
    <div>
      <div className="border context-App">
        <h4>Function Child Component</h4>
        <h3>{num}</h3>
        <div>
        <button className='btn' onClick={()=>  setNum(num - 1)}>Dec</button>
        </div>
      </div>
    </div>
  );
};

export default FComponent;
