import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Intro from "../Pages/Intro";
import Join from "../Pages/Join";
import Receive from "../Pages/Receive";
import Background from "../Components/Background";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/intro" element={<Intro/>} ></Route>
        <Route path="/join" element={<Join/>} ></Route>
        <Route path="/receive" element={<Receive/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App;
