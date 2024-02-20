import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className= {"topbar " + (menuOpen && "active")}>
    <div className="wrapper">
      <div className="left" onClick={()=>setMenuOpen(false)}>
        <a href="#about" className="logo"> MedicApp</a>
        

      </div>
      <h1>Ayanna Missonary Hospital</h1>
      <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  </div>
  )
}
