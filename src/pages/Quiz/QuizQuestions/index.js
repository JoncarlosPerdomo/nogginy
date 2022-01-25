/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const getApiUrl = (props) => {
  let API_URL = `https://opentdb.com/api.php?amount=10`;

  if (props.category) {
    API_URL = API_URL.concat("&category=", props.category);
  }
  if (props.difficulty) {
    API_URL = API_URL.concat("&difficulty=", props.difficulty);
  }
  return API_URL;
};

const QuizQuestions = (props) => {
  const [isFinished, setIsFinished] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  // const [questions, setQuestions] = useState("");
  const navigate = useNavigate();
  const { loading, error, value } = useFetch(getApiUrl(props), {}, []);
  // const [incorrectAnswer, setIncorrectAnswer] = useState();
  // function getAnswers(props) {}

  const handleAnswerChoiceClick = (answer) => {
    if (answer === value.results[0].correct_answer) {
      setCorrectAnswer(true);
    }
    setIsFinished(true);
  };

  return isFinished ? (
    <div className="text-center">
      {correctAnswer ? (
        <h2 className="text-white text-2xl">Correct</h2>
      ) : (
        <h2 className="text-white text-2xl">Incorrect</h2>
      )}
      <button
        type="button"
        className="text-white text-xl outline outline-4 outline-offset-8 rounded-sm m-4 hover:bg-white hover:text-sky-400 hover:outline hover:outline-4 hover:outline-offset-8 hover:outline-sky-400"
        onClick={() => navigate("/nogginy")}
      >
        Reset
      </button>
    </div>
  ) : (
    <div className="App">
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {value && (
        <div className="text-white text-center text-2xl pt-20">
          <h3>
            {value.results[0].question
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&ldquo;/g, '"')
              .replace(/&rdquo;/g, '"')}
          </h3>
          {value.results[0].incorrect_answers.map((answer, index) => {
            return (
              <button
                type="button"
                className="button"
                key={index}
                onClick={() => handleAnswerChoiceClick(answer)}
              >
                {answer}
              </button>
            );
          })}
          <button
            type="button"
            className="button"
            onClick={() =>
              handleAnswerChoiceClick(value.results[0].correct_answer)
            }
          >
            {value.results[0].correct_answer}
          </button>
        </div>
      )}
    </div>
  );
};

QuizQuestions.propTypes = {
  category: PropTypes.string,
  difficulty: PropTypes.string,
};

export default QuizQuestions;
