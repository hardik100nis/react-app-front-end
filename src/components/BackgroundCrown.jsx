import React from 'react';
import crownImage from '../assets/burnimages/Icon_256_Crown_03.png';

const BackgroundCrown = () => {
  return (
    <div className="background-crown-container">
      <div className="background-crown">
        <img src={crownImage} alt="Crown" className="crown-image" />
      </div>
    </div>
  );
};

export default BackgroundCrown;
