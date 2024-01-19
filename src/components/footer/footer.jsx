import React from "react";
import "./footer.css";
import Te from "../../assets/phone-call.png";
import Git from "../../assets/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 | Latthaphon</p>
        <div className="social-links">
          <a href="https://web.facebook.com/lattapon.games/" target="_blank">
            <img
              className="link"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
            />
          </a>

          <a href="https://www.instagram.com/090602.g/" target="_blank">
            <img
              className="link"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
            />
          </a>

          <a href="https://github.com/Latthaphon2545" target="_blank">
            <img className="link" src={Git} />
          </a>

          <a
            href="https://www.linkedin.com/in/latthaphon-phoemmanirat-5295a32a0/"
            target="_blank"
          >
            <img
              className="link"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png"
            />
          </a>

          <a href="tel:094-905-4456" target="_blank">
            <img className="link" src={Te} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
