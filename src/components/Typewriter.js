import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const textArray = text.split('');
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      currentText += textArray[index];
      setDisplayText(currentText);
      index++;

      if (index === textArray.length) {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

export default Typewriter;
