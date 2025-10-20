import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { Brain } from "lucide-react";

const Home = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8765/quiz/get/all")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.error("Error fetching quizzes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20 px-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
      >
        Choose Your <span className="text-yellow-400">Quiz Challenge</span>
      </motion.h1>

      {/* Quiz Grid */}
      {quizzes.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-500 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
            >
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Brain className="w-8 h-8" />
              </div>

              <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>
              <p className="text-gray-400 mb-4">
                {quiz.questionIds.length} Questions
              </p>

              <Link
                to={`/quiz/${quiz.id}`}
                className="bg-white text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Start Quiz
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg mt-20">
          Loading available quizzes...
        </p>
      )}
    </div>
  );
};

export default Home;
