import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../Pages/mainPage";
import Intro from "../Pages/Intro";
import Join from "../Pages/Join"
import Receive from "../Pages/Receive";

function App() {
  return (
    <>
      <Receive/>
    </>
  )
}

export default App;
