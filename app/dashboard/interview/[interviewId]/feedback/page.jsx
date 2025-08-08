"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function FeedbackPage({ params }) {
  const { interviewId } = params;
  const router = useRouter();

  // Sample feedback data — replace with real feedback from your backend
  const feedback = {
    score: 85,
    strengths: [
      "Clear communication",
      "Strong understanding of MERN stack",
      "Good problem-solving skills",
    ],
    improvements: [
      "Work on time management",
      "Provide more detailed answers",
    ],
  };

  const handleRetake = () => {
    router.push(`/dashboard/interview/${interviewId}/start`);
  };

  const handleDashboard = () => {
    router.push(`/dashboard`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-4">Interview Feedback</h1>

        <p className="text-center text-lg">
          Your Interview ID: <span className="font-mono">{interviewId}</span>
        </p>

        <div className="text-center">
          <p className="text-4xl font-extrabold text-indigo-600">{feedback.score}%</p>
          <p className="text-gray-600 mt-1">Overall Score</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-green-600">Strengths</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {feedback.strengths.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-red-600">Areas for Improvement</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {feedback.improvements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handleRetake}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Retake Interview
          </button>
          <button
            onClick={handleDashboard}
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
