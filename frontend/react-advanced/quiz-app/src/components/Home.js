import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to the Quiz App!</h2>
      <p>Test your knowledge by taking a quiz.</p>

      {/* Navigate to Quiz page */}
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
