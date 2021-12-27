import { useState } from "react";
import QuizQuestions from "./QuizQuestions/QuizQuestions";
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
  return gameStart ? (
    <QuizQuestions />
  ) : (
    <div className="display">
      <div className="main">
        <label htmlFor="trivia_difficulty">Choose a Category:</label>
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

        <select
          onChange={categoryHandler}
          name="trivia_category"
          data-testid="category"
        >
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>

        <button
          type="button"
          className="button"
          onClick={() => setGameStart(true)}
        >
          Play Game
        </button>
        <h2>
          Category: {category}
          Difficulty: {difficulty}
        </h2>
      </div>
    </div>
  );
};

// Quiz.propTypes = {};

export default Quiz;
