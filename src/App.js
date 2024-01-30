import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseState from "./components/hooks/UseState";
import Home from "./components/Home";
import Header from "./components/Header";
import UseEffect from "./components/hooks/UseEffect";
import UseRef from "./components/hooks/UseRef";
import UseMemo from "./components/hooks/UseMemo";
import UseCallback from "./components/hooks/UseCallback";
import UseContext from "./components/hooks/useContext/UseContext";
import UseReducer from "./components/hooks/UseReducer";
import CustomHook from "./components/hooks/customHook/CustomHook";
import AppEditor from "./code-Editor/AppEditor";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/customhook" element={<CustomHook />} />
        <Route path="/appeditor" element={<AppEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
