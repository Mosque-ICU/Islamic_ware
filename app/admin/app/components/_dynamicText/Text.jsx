import React, { useState, useEffect } from "react";
import "./DynamicText.css"; // Import the CSS file with your styles

const DynamicText = ({ sentence, words, wordsStyle, sentenceStyle }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const dynamicText = ` ${words[currentWordIndex]}.`;

  return (
    <div className="">
      <h1 className={sentenceStyle}>{sentence}</h1>
      <h1 className={`${wordsStyle} dynamic-text`}>{dynamicText}</h1>
    </div>
  );
};

export default DynamicText;
