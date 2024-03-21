// src/components/nurses/Aboutus.jsx
import React from 'react';
import './aboutus.scss';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Aboutus = () => {
  return (
    <div className="aboutus">
      <section className="top-section">
        <div className="imgContainer">
          <h1 className="image-title">Know US...</h1>
          <img src="pics/z10.webp" alt="" />
        </div>
      </section>
     
      <h2>Ayannah Medical Center: A Journey of Healing and Compassion</h2>
      <div className="aboutus-paragraph">
        <p>
          In the heart of a bustling city, nestled amidst the urban landscape, Ayannah Medical Center stands as a
           beacon of hope and healing.
          Established over three decades ago, Ayannah Medical Center has evolved into a trusted and 
          reputable healthcare institution,
          dedicated to providing exceptional medical services to the community it serves.
          The journey of Ayannah began with a vision – a vision to create a healthcare facility that not only addressed 
          the physical ailments of individuals
          but also nurtured their overall well-being. In the early years, the founders faced numerous challenges, 
          from securing funding to assembling a team of skilled
          healthcare professionals. However, their unwavering commitment and passion fueled the hospital's growth, 
          overcoming every obstacle in their path.
        </p>
        <p>
          
          From its humble beginnings, Ayannah Medical Center has expanded its services, becoming a comprehensive healthcare 
          hub that caters to a diverse range of medical needs.
          The hospital boasts state-of-the-art facilities, cutting-edge medical technology, and a team of dedicated physicians, 
          nurses, and support staff.  Ayannah's commitment to patient-centered care is evident in its compassionate approach. The hospital places a 
          strong 
          emphasis on building lasting relationships with patients,
          ensuring that each individual receives personalized attention and care.
          The warm and welcoming atmosphere within the hospital walls reflects the belief that healing goes beyond medical treatments – it is a 
          holistic
          journey that encompasses physical, emotional, and spiritual well-being.
        </p>
        <p>
          
        
          Over the years, Ayannah has played a pivotal role in community outreach programs, conducting health awareness campaigns, and
           collaborating with local organizations to promote preventive care. The hospital's impact extends beyond its walls, reaching into the 
           lives of individuals and families, fostering a healthier and happier community.
          Ayannah Medical Center's commitment to innovation is reflected in its continuous pursuit of excellence. 
          The hospital remains at the forefront of medical advancements, embracing new technologies and treatment modalities to provide the best 
          possible care for its patients. The research and development wing of Ayannah actively contributes to medical knowledge,
          ensuring that the hospital remains a center of learning and progress.
          As Ayannah looks toward the future, it envisions a healthcare landscape that is inclusive, accessible, 
          and focused on the well-being of every individual. The hospital's mission, rooted in compassion and integrity, 
          continues to guide its path, shaping a legacy of healing and service.
          In the corridors of Ayannah Medical Center, the echoes of countless success stories and healed lives resonate. 
          Each patient's journey is a testament to the hospital's commitment to excellence, making Ayannah a beacon of health, hope, and 
          humanity in the community it serves.
        </p>
      </div>
      <section className="ayannah-contacts">
    
       
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

        {/* Middle section */}
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

        {/* Right section */}
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

      </section>
    </div>
  );
}

export default Aboutus;
