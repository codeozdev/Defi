import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Developers from "./components/Developers.jsx";
import Subscribe from "./components/Subscribe.jsx";

function App() {
  return <div className="App">
    <Navbar />
    <Hero />
    <About />
    <Developers />
    <Subscribe />
  </div>;
}

export default App;
