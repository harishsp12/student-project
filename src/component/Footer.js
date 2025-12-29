import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">

          {/* ABOUT */}
          <div className="footer-box">
            <h3>About us</h3>
            <p>
              Kridashala International is an educational establishment
              situated in Perumbakkam, Chennai. It serves as a play school,
              day care, and activity center, offering a range of services
              for children.
            </p>

            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f contact-icon"></i></a>
              <a href="#"><i className="fab fa-instagram contact-icon"></i></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <a href="#" className="contact-list"><li> Home</li></a>
              <a href="#" className="contact-list"><li> About us</li></a>
              <a href="#" className="contact-list"><li> Facilities</li></a>
              <a href="#" className="contact-list"><li> Admissions</li></a>
              <a href="#" className="contact-list"><li> Gallery</li></a>
              <a href="#" className="contact-list"><li> Faculty</li></a>
              <a href="#" className="contact-list"><li> Branches</li></a>
              <a href="#" className="contact-list"><li> Contact us</li></a>
            </ul>
          </div>

          {/* CLASSES */}
          <div className="footer-box">
            <h3>Classes</h3>
            <ul>
              <a href="#" className="contact-list"><li>Day Care</li></a>
              <a href="#" className="contact-list"><li>Play Group</li></a>
              <a href="#" className="contact-list"><li>Junior KG</li></a>
              <a href="#" className="contact-list"><li>Senior KG</li></a>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-box">
            <h3>Contact Us</h3>

            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <span>+91 95669 67669</span>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <span>+91 93444 76647</span>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <span>vinoth@gmail.com</span>
            </div>

            <div className="contact-item contact-icon">
              <i className="fas fa-map-marker-alt"></i>
              <span>
                Block-10, Villa-4, Bollineni Hillside Road,
                Nookampalayam, Arasankalani,
                Perumbakkam, Chennai - 600119
              </span>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            Copyright © 2025 Vinoth. All Rights Reserved.
            Developed by Harish.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
