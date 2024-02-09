// Experience.js

import React, { useState } from "react";
import "./experience.css";
import CESCa1 from "../../assets/ex/cas1.jpg";
import CESCa2 from "../../assets/ex/cas2.jpg";
import CESCa3 from "../../assets/ex/cas3.jpg";
import CESCa4 from "../../assets/ex/cas4.jpg";
import CESCa5 from "../../assets/ex/cas5.jpg";
import CESCa6 from "../../assets/ex/cas6.jpg";
import KKU1 from "../../assets/ex/a1.jpg";
import KKU2 from "../../assets/ex/a2.jpg";
import Academic1 from "../../assets/ex/r1.jpg";
import Academic2 from "../../assets/ex/r2.jpg";
import Ta1 from "../../assets/ex/ta.png";
import Ta2 from "../../assets/ex/ta1.png";

const experiencesData = [
  {
    title: "CESCa : Computer Engineering Summer Camp, KKU",
    images: [CESCa1, CESCa2, CESCa3, CESCa4, CESCa5, CESCa6],
  },
  { title: "KKU Game 2021", images: [KKU1, KKU2] },
  { title: "Academic Excellence Recognition", images: [Academic1, Academic2] },
  { title: "Teacher Assistant of Data Structur", images: [Ta1, Ta2] },
];

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLargeImage = (image) => {
    setSelectedImage(image);
  };

  const closeLargeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="experiencePage">
      <a className="exTitle">
        <span>Experiences</span>
      </a>

      <div className="experiences">
        {experiencesData.map((experience, index) => (
          <div className="experienceWrapper" key={index}>
            <h3>{experience.title}</h3>
            <div className="experience">
              <div className="imageGrid">
                {experience.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="imageContainer">
                    <img
                      src={image}
                      alt={`${experience.title} ${imageIndex + 1}`}
                      onClick={() => openLargeImage(image)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="largeImageOverlay" onClick={closeLargeImage}>
          <img src={selectedImage} alt="Large Image" />
        </div>
      )}
    </section>
  );
};

export default Experience;
