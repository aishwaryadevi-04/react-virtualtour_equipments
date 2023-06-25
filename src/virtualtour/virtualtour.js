import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import hc0 from './images/hc0.jfif';
import hc1 from './images/hc1.jpg';
import hc2 from './images/hc2.jpg';
import hc3 from './images/hc3.jfif';
import hc4 from './images/hc4.jfif';
import hc5 from './images/hc5.jfif';
import f1 from './images/f1.jfif';
import f2 from './images/f2.jfif';
import f3 from './images/f3.jfif';
import i1 from './images/i1.jfif';
import p1 from './images/p1.jfif';
import p2 from './images/p2.jfif';
import p3 from './images/p3.jfif';
import './virtualtour.css'
const VirtualTour = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageArrays, setImageArrays] = useState([hc0, hc1, hc2, hc3, hc4]);
  const [selectedImageName, setSelectedImageName] = useState('MIT Health Centre');
  const images = [hc0, hc1, hc2, hc3, hc4, hc5];
  const images1 = [hc0, hc1, hc4, p1];
  const texts = [
    'Health Centre - Front Elevation',
    'Health Centre Interior - View I',
    'Health Centre Interior - View II',
    'Pharmacy'
  ];

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imageArrays.length);
  };

  const handleImageClick = (index) => {
    let clickedArray = [];


    if (index === 0) {
      clickedArray = [hc0, f1, f2, f3];
    } else if (index === 1) {
      clickedArray = [hc1, hc2, i1];
    } else if (index === 2) {
      clickedArray = [hc3, hc4, hc5];
    }
    else if (index === 3) {
      clickedArray = [p1, p2, p3];
    }


    setCurrentImage(0);
    setImageArrays(clickedArray);
    setSelectedImageName(texts[index]);
  };

  useEffect(() => {
    const timer = setTimeout(handleNextImage, 2000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <div>

      <div className="container mt-6">
        <div className="col-md-12 offset-md-3 mt-4">
          <div className="image-heading">
            <h2>{selectedImageName}</h2>
          </div>
          <div className="image-container">

            {imageArrays.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={`tour-image ${index === currentImage ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          <div className="slider-dots">
            {imageArrays.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <h5>Click below options to view virtual tours</h5>
        {images1.slice(0, 4).map((image, index) => (
          <div key={index} className="col-md-3">
            <div className="image-wrapper" onClick={() => handleImageClick(index)}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="hover-image"

              />
              <div className="image-text">{texts[index]}</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default VirtualTour;