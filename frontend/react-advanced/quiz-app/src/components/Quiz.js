import React, { useState } from 'react';
import Question from './Question';

// Quiz data
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle clicking an answer
  const handleAnswerClick = (option) => {
    setSelectedOption(option);

    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  // Go to next question
  const handleNext = () => {
    const nextQ = currentQuestion + 1;
    if (nextQ < quizData.length) {
      setCurrentQuestion(nextQ);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Your Score: {score} / {quizData.length}</h2>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <Question 
            data={quizData[currentQuestion]} 
            handleAnswerClick={handleAnswerClick} 
            selectedOption={selectedOption}
          />
          {selectedOption && <button onClick={handleNext}>Next</button>}
        </div>
      )}
    </div>
  );
}

export default Quiz;
