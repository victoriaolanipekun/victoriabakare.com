import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Hobbies from "./components/hobbies/Hobbies";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu/>
      <div className= "sections">
        <Intro/>
        <Skills/>
        <Portfolio/>
        <Hobbies/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
