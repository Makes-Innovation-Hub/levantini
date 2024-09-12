import React, { useState } from "react";

const TextQuestion = ({ question, text }) => {
  const [userAnswer, setUserAnswer] = useState(""); 

  
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div>
      <p>{question}</p> 
      {text && <p>{text}</p>} 
      <input
        type="text"
        value={userAnswer}
        onChange={handleInputChange}
        placeholder="Type your answer here"
      />
    </div>
  );
};

export default TextQuestion;