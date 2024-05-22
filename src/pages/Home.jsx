import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './home.scss';

const slides = [
  {
    imgSrc: 'pics/A1.jpg',
    alt: 'Slide 1',
    title: 'DISCOVER',
    subtitle: 'your next destination!',
  },
  {
    imgSrc: 'pics/pe6.jpg',
    alt: 'Slide 2',
    title: 'EXPLORE',
    subtitle: 'the wonders of the world!',
  },
  {
    imgSrc: 'pics/pe4.jpg',
    alt: 'Slide 3',
    title: 'ADVENTURE',
    subtitle: 'awaits around every corner!',
  },
];

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 6000);  // Reset animation after 5 seconds
    }, 7000);  // Change slide every 8 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home" id="home">
      <div className="media-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className="imgContainer">
        <img src={slides[currentSlideIndex].imgSrc} alt={slides[currentSlideIndex].alt} />
        <div className={`textOverlay ${animate ? 'animate' : ''}`}>
          <h1 className="title">{slides[currentSlideIndex].title}</h1>
          <h2 className="subtitle">{slides[currentSlideIndex].subtitle}</h2>
        </div>
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentSlideIndex(index);
              setAnimate(true);
              setTimeout(() => setAnimate(false), 6000);  // Reset animation after 5 seconds
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
