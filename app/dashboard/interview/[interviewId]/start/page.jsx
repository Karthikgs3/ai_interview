"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function StartInterview({ params }) {
  const { interviewId } = params;
  const router = useRouter();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    // Simulate fetching questions - replace with real API call later
    const mockQuestions = [
      "Tell me about yourself.",
      "Explain the MERN stack.",
      "What is your biggest strength?",
    ];
    setQuestions(mockQuestions);
  }, []);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswer("");
    } else {
      router.push(`/dashboard/interview/${interviewId}/feedback`);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading questions...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 space-y-6">
        <p className="text-sm text-gray-500">
          Question {currentIndex + 1} of {questions.length}
        </p>

        <h2 className="text-2xl font-semibold">{questions[currentIndex]}</h2>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={5}
          placeholder="Type your answer here..."
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleNext}
          className="mt-4 w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          {currentIndex < questions.length - 1 ? "Next Question" : "See Feedback"}
        </button>
      </div>
    </div>
  );
}

export default StartInterview;
