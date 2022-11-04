import "./styles.css";
import React from "react";
// import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
      <Home />
    </div>
  );
}
export default App;
