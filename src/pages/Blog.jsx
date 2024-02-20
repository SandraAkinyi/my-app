import { useState } from "react";
import "./blog.scss";

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./pics/r6.jpg",
      title: "Nutrition",
      desc:
        "To be recognized as a leading healthcare institution, committed to delivering exceptional medical services",
      img:
        "./pics/r6.jpg",
    },
    {

      id: "2",
      icon: "./pics/h2.jpg",
      title: "fitness",
      desc:
        "To be recognized as a leading healthcare institution, committed to delivering exceptional medical services",
      img:
        "./pics/h2.jpg",
    },
    {
      id: "3",
      icon: "./pics/n5.webp",
      title: "hydration",
      desc:
        "To be recognized as a leading healthcare institution, committed to delivering exceptional medical services",
      img:
        "./pics/n5.webp",
    },
    {
        id: "4",
        icon: "./pics/h3.jpg",
        title: "Monthly checkup",
        desc:
          "To be recognized as a leading healthcare institution, committed to delivering exceptional medical services",
        img:
          "./pics/n5.webp",
      },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    
    <div className="blog" id="blog">
        
      <div
      
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
          
        {data.map((d) => (
        
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src="/pics/r10.jpg" alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className="buttonContainer">
            <button className="customButton">learn more</button>
          </div>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.icon} 
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="pics/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="pics/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
