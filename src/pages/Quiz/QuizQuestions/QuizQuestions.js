/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";

const QuizQuestions = () => {
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10`)
      .then((response) => response.json())
      .then((data) => setQuestions(data.results))
      .catch((err) => {
        setError(err);
        // setQuestions(null);
      })
      .finally(() => {
        console.log(questions);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {questions && <h3>{questions[0].question}</h3>}
    </div>
  );
};

// QuizQuestions.propTypes = {};

export default QuizQuestions;
