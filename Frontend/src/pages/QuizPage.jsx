import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Confetti from "react-confetti";

const QuizPage = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // ✅ Fetch quiz questions by ID
  useEffect(() => {
    axios
      .get(`http://localhost:8765/quiz/get/${id}`)
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quiz:", err);
        setLoading(false);
      });
  }, [id]);

  // ✅ Handle selecting an option
  const handleOptionSelect = (questionId, selectedOption) => {
    const updatedResponses = responses.filter((r) => r.id !== questionId);
    setResponses([...updatedResponses, { id: questionId, response: selectedOption }]);
  };

  // ✅ Submit the quiz
  const handleSubmit = () => {
    axios
      .post(`http://localhost:8765/quiz/submit/${id}`, responses)
      .then((res) => {
        setScore(res.data);
        setSubmitted(true);
      })
      .catch((err) => console.error("Error submitting quiz:", err));
  };

  // ✅ Result Page (with confetti)
  if (submitted) {
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <motion.div
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Confetti width={window.innerWidth} height={window.innerHeight} />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative flex flex-col items-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-yellow-400 mb-6 text-6xl"
          >
            🏆
          </motion.div>

          <h1 className="text-4xl font-extrabold mb-2 drop-shadow-md">
            Congratulations!
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            You’ve completed the quiz.
          </p>

          {/* Score display */}
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-xl mb-6">
            <p className="text-2xl font-semibold mb-2">
              Your Score:{" "}
              <span className="text-yellow-300">{score}</span> / {totalQuestions}
            </p>
            <p
              className={`text-xl font-semibold ${
                percentage >= 70
                  ? "text-green-300"
                  : percentage >= 40
                  ? "text-yellow-300"
                  : "text-red-300"
              }`}
            >
              {percentage}% Correct
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Retry Quiz
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-white/20 px-5 py-2 rounded-lg font-semibold hover:bg-white/30 transition"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // ✅ Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <h2 className="text-2xl animate-pulse">Loading Quiz...</h2>
      </div>
    );
  }

  // ✅ Quiz Questions Display
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12 text-yellow-400"
      >
        Quiz Challenge
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        {questions.map((q, index) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {index + 1}. {q.question}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[q.optionA, q.optionB, q.optionC, q.optionD].map((option, i) => (
                <label
                  key={i}
                  className={`p-3 rounded-lg cursor-pointer text-lg border transition-all ${
                    responses.find((r) => r.id === q.id && r.response === option)
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-white/10 hover:bg-white/20 border-gray-600"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    onChange={() => handleOptionSelect(q.id, option)}
                    className="hidden"
                  />
                  {option}
                </label>
              ))}
            </div>
          </motion.div>
        ))}

        <div className="flex justify-center mt-10">
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
