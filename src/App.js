import React from "react";
import "./App.css";
import PersonAdd from "./components/person-add/person-add";
import PersonHome from "./components/person-home/person-home";
import PersonList from "./components/person-list/person-list";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<PersonHome />} exact />
        <Route path="/person-list" element={<PersonList />} />
        <Route path="/add-person" element={<PersonAdd />} />
      </Routes>
    </div>
  );
}

export default App;
