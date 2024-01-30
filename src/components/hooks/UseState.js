import React, { useState } from "react";
import AppEditor from "../../code-Editor/AppEditor";

const UseState = () => {
  // function initialValue (){
  //   console.log("Fn Clicked");
  //   return 0;
  // }

  const [name, setName] = useState("Anshul");
  const [toggle, setToggle] = useState(false);

  // When call a fn like this , it will render on every click
  // const [num, setNum] = useState(initialValue());

  // if initial value comes from a heavy operation then use the fn like this , it will render only once
  const [num, setNum] = useState(() => {
    console.log("Clicked!");
    return 0;
  });

  const [array, setArray] = useState([]);

  const changeName = () => {
    setName("Ankush");
    setToggle(!toggle);
  };

  const increment = () => {
    setNum((oldState) => oldState + 1);
    setNum((oldState) => oldState + 1);
  };
  const decrement = () => {
    // this will decrease only once , use prevState to dec it twice
    setNum(num - 1);
    setNum(num - 1);
  };

  const submit = (e) => {
    e.preventDefault();
    setArray([...array, { id: array.length, name }]);
    setName("");
    console.log(array);
  };
  return (
    <div className="App">
      {/* update state value */}
      <div>I'm {toggle ? name : "Anshul"}</div>
      <button className="btn" onClick={changeName}>
        Click me!
      </button>
      <hr></hr>

      {/* steps */}
      <button className="btn" onClick={decrement}>
        {" "}
        -{" "}
      </button>
      <div>{num}</div>
      <button className="btn" onClick={increment}>
        {" "}
        +{" "}
      </button>
      <hr></hr>

      {/* Array */}
      <form onSubmit={submit} className="display">
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Add Name"
          onChange={(e) => setName(e.target.value)}
          className="pad"
        />
        <button className="btn">Submit</button>
      </form>
      <ul>
        {array.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseState;
