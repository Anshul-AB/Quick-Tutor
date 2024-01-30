import React, { useReducer } from "react";

const initialState = { id: Date.now(), name: "", email: "", array: [] };
// In useReducer hook, the initial state is set like this

// reducer fn
//Define a function (reducer) that takes the current state and an action, and returns the new state based on the action.
function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_ARRAY":
      return { ...state, array: [...state.array, action.payload] };
    case "deleteContact":
      return {
        ...state,
        array: state.array.filter(
          (delContact) => delContact.id !== action.payload.id
        ),
      };
    default:
      throw new Error();
  }
}

const UseReducer = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [array, setArray] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);
  //   Dispatch actions to update the state.

  //   Add Contact
  const submit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name: state.name, email: state.email };

    // setArray([...array, newContact]);
    dispatch({ type: "SET_ARRAY", payload: newContact });

    // setName("");
    // setEmail("");
    dispatch({ type: "SET_NAME", payload: "" });
    dispatch({ type: "SET_EMAIL", payload: "" });
  };

  return (
    <div className="App">
      <div className="explain">
        The useReducer hook is more advanced and is often used when the state
        logic is complex or involves multiple sub-values, or when the next state
        depends on the previous state.
        <br />
        <br />
        <b>Structure:</b>
        <br />
        1. state:- The current state value.
        <br /> we use - "const initialState =" instead of "useState()"
        <br />
        <br />
        2. dispatch:- A function used to dispatch actions to update the state.
        <br />
        we use - "dispatch()" instead of "setState()"
        <br />
        <br />
        ** The useReducer hook is used to create a state and a dispatch
        function.
        <br />
        eg:- const [state, dispatch] = useReducer(reducer, initialState)
        <br /> <br />
        **The state is managed by the reducer function, and actions are
        dispatched to update the state.
        <br />
        <br />
        **Define a function (reducer) that takes the current state and an
        action, and returns the new state based on the action.
        <br />
        eg:-function reducer (state, action)
      </div>
      <form className="context-App" onSubmit={submit}>
        <input
          type="text"
          id="name"
          value={state.name}
          autoComplete="off"
          //   onChange={(e) => setName(e.target.value)}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          placeholder="Enter Name"
          className="pad"
        />
        <input
          type="email"
          id="email"
          value={state.email}
          autoComplete="off"
          //   onChange={(e) => setEmail(e.target.value)}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          placeholder="Enter Email"
          className="pad"
        />
        <button className="btn">Add Contact</button>
      </form>
      <h2>Contact List</h2>
      <ul>
        {state.array.map((contact) => (
          <li key={contact.id}>
            {contact.name}
            {""}-{""}
            {contact.email}
            &nbsp; &nbsp;
            <button
              onClick={() =>
                dispatch({ type: "deleteContact", payload: { id: contact.id } })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
