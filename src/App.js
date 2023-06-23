import "./App.css";
import Contact from "./components/Contact/Contact"
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Skills from "./components/Skills/Skills";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
