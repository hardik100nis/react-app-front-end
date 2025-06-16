import React, { useEffect, useState } from 'react';

const CartoonStars = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const starCount = 30; // Increased number of stars
      
      for (let i = 0; i < starCount; i++) {
        // Random positions, in the corners with 45-degree movement paths
        let x, y, moveX, moveY;
        const corner = Math.floor(Math.random() * 4); // 0: top-left, 1: top-right, 2: bottom-left, 3: bottom-right
        
        if (corner === 0) { // top-left
          x = Math.random() * window.innerWidth * 0.25;
          y = Math.random() * window.innerHeight * 0.25;
          moveX = 1; // Move right
          moveY = 1; // Move down
        } else if (corner === 1) { // top-right
          x = window.innerWidth - (Math.random() * window.innerWidth * 0.25);
          y = Math.random() * window.innerHeight * 0.25;
          moveX = -1; // Move left
          moveY = 1; // Move down
        } else if (corner === 2) { // bottom-left
          x = Math.random() * window.innerWidth * 0.25;
          y = window.innerHeight - (Math.random() * window.innerHeight * 0.25);
          moveX = 1; // Move right
          moveY = -1; // Move up
        } else { // bottom-right
          x = window.innerWidth - (Math.random() * window.innerWidth * 0.25);
          y = window.innerHeight - (Math.random() * window.innerHeight * 0.25);
          moveX = -1; // Move left
          moveY = -1; // Move up
        }
        
        // Random sizes
        const size = Math.random() * 0.5 + 0.5; // Scale factor between 0.5 and 1
        
        // Random animation delays and speeds
        const animDelay = Math.random() * 5; // 0-5s delay
        const animDuration = Math.random() * 5 + 10; // 10-15s duration (slower for diagonal movement)
        const moveDuration = Math.random() * 15 + 15; // 15-30s for the movement animation
        const moveDistance = 50 + Math.random() * 150; // Random movement distance 50-200px
        
        newStars.push({
          id: i,
          x,
          y,
          size,
          moveX,
          moveY,
          moveDistance,
          animDelay,
          animDuration,
          moveDuration
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
    
    // Regenerate stars when window is resized
    const handleResize = () => {
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="cartoon-stars">
      {stars.map(star => (
        <div 
          key={`star-${star.id}`} 
          className="star"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            '--star-scale': star.size,
            '--move-distance': `${star.moveDistance}px`,
            animation: `
              twinkleStar ${star.animDuration}s ease-in-out infinite alternate,
              moveStar${star.moveX > 0 ? 'Right' : 'Left'}${star.moveY > 0 ? 'Down' : 'Up'} ${star.moveDuration}s linear infinite alternate-reverse
            `,
            animationDelay: `${star.animDelay}s, ${star.animDelay * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

export default CartoonStars;
