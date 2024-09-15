import React, { useState } from "react";

const TextQuestion = ({ question, text }) => {
  const [userAnswer, setUserAnswer] = useState(""); 

  
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div>
      <p>{question}</p> 
      {text  } 
   
    </div>
  );
};

export default TextQuestion;