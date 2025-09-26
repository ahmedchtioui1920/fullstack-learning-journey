import React from 'react';

// Renders the question and answer options
function Question({ data, handleAnswerClick, selectedOption }) {
  return (
    <div>
      <h2>{data.question}</h2>
      <div>
        {data.options.map((option, index) => {
          let className = "";

          // Highlight correct/incorrect after selecting an option
          if (selectedOption) {
            if (option === data.answer) className = "correct";
            else if (option === selectedOption) className = "wrong";
          }

          return (
            <button 
              key={index} 
              onClick={() => handleAnswerClick(option)}
              className={className}
              disabled={selectedOption} // prevent changing answer
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
