// src/components/Footer/Footer.jsx
import React from 'react';
// import styles from './Footer.module.css'; // REMOVE THIS LINE
  import rightImage from '../../assets/Group-1000007323.png'; // Adjust the path based on your folder structure
function Footer() {
  return (
    <>
      {/* SVG for the footer mascot */}
      <img className="footer-mascot" src={rightImage} alt="Mining Space Penguins" />

      <footer className="footer"> {/* Changed to global class */}
        <div className="profile-card-wrapper"> {/* Changed to global class */}
          <div className="profile-card"> {/* Changed to global class */}
            <div className="profile-icon"> {/* Changed to global class */}
              <i className="fab fa-twitter"></i>
            </div>
            <div className="profile-info"> {/* Changed to global class */}
              <div className="profile-name">Twitter</div> {/* Changed to global class */}
              <div className="profile-handle"><a href="#">@hashlordz</a></div> {/* Changed to global class */}
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-icon">
              <i className="fab fa-discord"></i>
            </div>
            <div className="profile-info">
              <div className="profile-name">Discord</div>
              <div className="profile-handle"><a href="#">discord.gg/hashlordz</a></div>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-icon">
              <i className="fab fa-telegram"></i>
            </div>
            <div className="profile-info">
              <div className="profile-name">Telegram</div>
              <div className="profile-handle"><a href="#">t.me/hashlordz</a></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;