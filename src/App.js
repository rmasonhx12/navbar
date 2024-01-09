//import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage";
import AboutLittleLemon from './AboutLittleLemon';
import Contact from './Contact';
import {  Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/about">About Little Lemon</Link>
        <Link to="/contact">Contact Little Lemon</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutLittleLemon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>    
    </div>
  );
}

export default App;
