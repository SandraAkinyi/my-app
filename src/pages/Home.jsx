// src/components/Portfolio.js
import React, { useEffect, useRef } from 'react'; 
import { init } from 'ityped';
import './home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [' '],
    });
  }, []);

 

  return (
    <div className="home" id="home">
      <div className="imgContainer">
        <img src="pics/h6.jpg" alt="" />
        <div className="textOverlay">
          <h1>WELCOME TO OUR FAMILY</h1>
          <h2>AYANNAH MEDICAL CENTER</h2>
          <h3>SERVING YOU AS YOU NEED</h3>
          <h4>
            <span ref={textRef}></span>
          </h4>

          <div className="buttonContainer">
           
            <Link className="customButton" to="/patient">Patient</Link>
           
            
            <Link className="customButton" to="/loginpage">Staff</Link>
            
           
            <Link className="customButton" to="/aboutus">Guest</Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
