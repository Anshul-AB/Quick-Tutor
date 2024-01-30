import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to={"/appeditor"}>
        <button className="home-btn">Code Editor</button>
      </Link>
      <Link to={"/usestate"}>
        <button className="home-btn">useState</button>
      </Link>
      <Link to={"/useeffect"}>
        <button className="home-btn">useEffect</button>
      </Link>
      <Link to={"/useref"}>
        <button className="home-btn">useRef</button>
      </Link>
      <Link to={"/usememo"}>
        <button className="home-btn">useMemo</button>
      </Link>
      <Link to={"/usecallback"}>
        <button className="home-btn">useCallback</button>
      </Link>
      <Link to={"/usecontext"}>
        <button className="home-btn">useContext</button>
      </Link>
      <Link to={"/usereducer"}>
        <button className="home-btn">useReducer</button>
      </Link>
      <Link to={"/customhook"}>
        <button className="home-btn">Custom Hook</button>
      </Link>
    </div>
  );
};

export default Home;
