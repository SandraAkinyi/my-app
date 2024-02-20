import "./menu.scss"
import { Link } from "react-router-dom"

export default function Menu({ menuOpen, setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Home</a>
                
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Services</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
            <Link to="/patient">Contact</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Appointment</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Blogs</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Events</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">LogIn</a>
            </li>
       </ul>
    </div>
  )
}
