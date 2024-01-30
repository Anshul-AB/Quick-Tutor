import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg between">
      <Link to={"/"}>
        <h1 style={{color:'dark-brown'}}>REACT HOOKS</h1>
      </Link>
      <Link to={"/appeditor"}>
        <button className="home-btn">Practice with Code Editor</button>
      </Link>
      <Link to={"/"}>
        <button className="h-btn">Back</button>
      </Link>
    </div>
  );
};

export default Header;
