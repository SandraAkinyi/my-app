import "./menu.scss"



export default function Menu({ menuOpen, setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Home</a>
                
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Services</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Contacts</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Appointment</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Blogs</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Events</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">LogIn</a>
            </li>
       </ul>
    </div>
  )
}
