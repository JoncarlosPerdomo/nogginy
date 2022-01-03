import React, { useState } from "react";
import QuizQuestions from "./QuizQuestions";
import CategorySelection from "./CategorySelection";
// import PropTypes from "prop-types";

const Quiz = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [category, setCategory] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  // Sets the category of the game to the one specified by the user
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  // Sets the difficulty of the game to the one specified by the user
  const difficultyHandler = (event) => {
    setDifficulty(event.target.value);
  };

  if (gameStart) {
    return <QuizQuestions category={category} difficulty={difficulty} />;
  }
  return (
    <div className="display">
      <div className="main">
        <label htmlFor="trivia_difficulty">Choose a Difficulty:</label>
        <select
          onChange={difficultyHandler}
          name="trivia_difficulty"
          data-testid="difficulty"
        >
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label htmlFor="trivia_category">Choose a Category:</label>

        <CategorySelection categoryHandler={categoryHandler} />

        <button
          type="button"
          className="button"
          onClick={() => setGameStart(true)}
        >
          Play Game
        </button>
      </div>
    </div>
  );
};

// Quiz.propTypes = {};

export default Quiz;
