// src/pages/Dashboard.jsx
import React from 'react';
import Header from '../components/Header/Header'; // Adjust path if necessary based on your folder structure
import Body from '../components/Body/Body';     // Adjust path if necessary based on your folder structure
import Footer from '../components/Footer/Footer';
function Dashboard() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Dashboard;