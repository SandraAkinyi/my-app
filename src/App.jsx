import Topbar from "./pages/Topbar";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Department from "./pages/Department";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./app.scss";
import { useState } from "react";

;

function App() {

    const [menuOpen,setMenuOpen] = useState(false)
    
    return (
      
      <div className="app">
       <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu  menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
       
       <div className="sections">
         <Home />
         <Department />
         <Blog />
         <Contact />

       </div>
      </div>
    );
  }
  export default App;