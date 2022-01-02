/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import useFetch from "../../../hooks/useFetch";

const QuizQuestions = () => {
  // const [questions, setQuestions] = useState("");
  const { loading, error, value } = useFetch(
    `https://opentdb.com/api.php?amount=10`,
    {},
    []
  );
  const [isFinished, setIsFinished] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  // const [incorrectAnswer, setIncorrectAnswer] = useState();

  useEffect(() => {
    if (value && typeof value === "object") {
      // value.map((elem) => console.log(elem));
      console.log(value);
    }
    // return () => {
    //   cleanup
    // }
  }, [value]);

  // function getAnswers(props) {}

  const handleAnswerChoiceClick = (answer) => {
    if (answer === value.results[0].correct_answer) {
      setCorrectAnswer(true);
    }
    setIsFinished(true);
  };

  return isFinished ? (
    <div>{correctAnswer ? <h2>Correct</h2> : <h2>Incorrect</h2>}</div>
  ) : (
    <div className="App">
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {value && (
        <>
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
          {value.results[0].incorrect_answers.map((answer) => {
            return (
              <button
                type="button"
                className="button"
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
        </>
      )}
    </div>
  );
};

// QuizQuestions.propTypes = {};

export default QuizQuestions;
