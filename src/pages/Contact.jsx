import "./contact.scss";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function contact() {
  

  return (
    <div className="contact" id="contact">
      <div className="left">
      <div className="wrapper">
      <p>
           <p>Ayannah medical center </p> 
           <p><strong>Post Office:</strong> P.O. Box 57811, 00200, City Square,
            Nairobi, Kenya</p>
            <p><strong>Email:</strong> info@ayannah.org,</p>
            <p><strong>Location:</strong> Kaptalang Rd, Loresho, Nairobi, Kenya</p>
            <p><strong>Direct Line:</strong> +254722206986,</p>
            <p><strong>Call Centre:</strong> 0111010100</p>
          </p>
          <p>
            Our Address
          </p>
        </div>
      </div>
      <div className="middle">
        <div className="wrapper">
        <p><strong>Vision:</strong></p>
        <p>
            "To be recognized as a leading healthcare institution, committed to delivering exceptional medical services,
             fostering innovation, and advancing the health and well-being of our community."
          </p>
          <p><strong>Mission:</strong> </p>
          <p>
            "Our mission is to provide high-quality, patient-centered healthcare with compassion and integrity.
             We strive to deliver comprehensive medical services, promote wellness, and enhance the overall health of the communities we serve."
          </p>
        
         <p style={{ marginTop: "100px" }}>
            Copyright © 2023 medicapp · All Rights Reserved
          </p>
        </div>
        
      </div>
      <div className="right">
        <div className="wrapper">
        <p>
            Follow us on social media:
          </p>
          <p style={{ marginTop: "40px" }}>
            
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}