"use client";

import React, { useState } from "react";

export default function RecordAnswers({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(""));

  const handleChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // All questions answered, call onComplete callback with answers
      onComplete(answers);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
      <p className="text-gray-600 text-sm">
        Question {currentIndex + 1} of {questions.length}
      </p>

      <h2 className="text-2xl font-semibold">{questions[currentIndex]}</h2>

      <textarea
        className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows={6}
        value={answers[currentIndex]}
        onChange={handleChange}
        placeholder="Type your answer here..."
      />

      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-md font-semibold ${
            currentIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
        >
          {currentIndex === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
