// src/components/BackToTopButton.js
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 0, // Set duration to 0 for an instant scroll
    });
  };

  return (
    <a id="back-to-top" href="#" className={`btn btn-dark btn-lg back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </a>
  );
};

export default BackToTopButton;
