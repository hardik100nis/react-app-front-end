// src/components/Body/Body.jsx
import React from 'react';
// import styles from './Body.module.css'; // REMOVE THIS LINE
  import rightImage from '../../assets/right-image.png';
function Body() {

  return (
    <main className="dashboard">
      <section className="resources dashboard-container">
        <div className="section-title">Resources</div>
        <div className="resources-grid"> {/* Changed to global class */}
          <div className="resource-box">0.00000 ETH</div>
          <div className="resource-box">0 SPACES LEFT</div>
        </div>
        <div className="resources-grid"> {/* Changed to global class */}
          <div className="resource-box">0.0000000000 $ HASH</div>
          <div className="resource-box">0 GIGAWATTS AVAILABLE</div>
        </div>

        <div className="section-title mt-8">Statistics</div>
        <div className="statistics-section"> {/* Changed to global class */}
          <div className="statistic-row">
            <div className="statistic-label">You are mining</div>
            <div className="statistic-value">0 HL / DAY</div>
          </div>
          <div className="statistic-row">
            <div className="statistic-label">Your hash rate is</div>
            <div className="statistic-value">0 HL / DAY</div>
          </div>
          <div className="statistic-row">
            <div className="statistic-label">Blocks until next halvening</div>
            <div className="statistic-value">0 HL / DAY</div>
          </div>
        </div>

        <div className="claim-section">
          <div className="claim-text">
            <span>You Have Mined : </span><span className="section-title"> 100,000 $HASH</span>
          </div>
          <button className="buy-btn">CLAIM NOW</button>
        </div>
      </section>

      <section className="acquire dashboard-container">
        <p className="acquire-text">
          <span>PLEASE ACQUIRE A</span><br />
          <span>MINING SPACE</span>
        </p>
        <div className="img-container">
          <img src={rightImage} alt="Mining Space Penguins" />
        </div>
        <button className="buy-btn">BUY SPACE</button>
      </section>
    </main>
  );
}

export default Body;