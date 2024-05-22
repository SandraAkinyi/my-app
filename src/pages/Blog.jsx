import { useState } from "react";
import "./blog.scss";
export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./pics/r9.jpg",
      title: "Mary",
      desc:
        "As a passionate traveler who loves immersing myself in different cultures, I found this tourism website to be an invaluable resource.",
      img:
        "./pics/r9.jpg",
    },
    {
      id: "2",
      icon: "./pics/h2.jpg",
      title: "Phillip",
      desc:
        "I stumbled upon this tourism website while planning my next adventure trip, and I must say, it exceeded my expectations!",
      img:
        "./pics/h2.jpg",
    },
    {
      id: "3",
      icon: "./pics/n5.webp",
      title: "Samueli",
      desc:
        "Planning a family vacation can be daunting, but this tourism website made it a breeze! The family-friendly destination suggestions and activities catered to all age groups.",
      img:
        "./pics/n5.webp",
    },
    {
      id: "4",
      icon: "./pics/pe5.jpg",
      title: "Joana",
      desc:
        "This tourism website made me feel empowered and inspired to embark on solo adventures.",
      img:
        "./pics/pe5.webp",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="blog" id="blog">
      <h4>Testimonials</h4>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className="buttonContainer"></div>
                </div>
              </div>
              <div className="right">
                <img src={d.icon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="pics/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="pics/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
    </div>
  );
}
