// src/components/Header/Header.jsx
import React from 'react';
// import styles from './Header.module.css'; // REMOVE THIS LINE
  import logoImage from '../../assets/HASHLORDZ.png'; // Adjust the path based on your folder structure
function Header() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
    <header className="centered-header">
      <h1 className="title">
         <img src={logoImage} alt="Mining Space Penguins" />
   
      </h1>
      <nav className="nav">
        <a href="/some-valid-path">HOME</a>
        <a href="/some-valid-path">ABOUT</a>
        <a href="/some-valid-path">BUY</a>
        <a href="/some-valid-path">DOCS</a>
        <button className="connect-btn">CONNECT WALLET</button>
      </nav>
    </header>

    </>
  );
}

export default Header;