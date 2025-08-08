"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InterviewPage({ params }) {
  const { interviewId } = params;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleStart() {
    setLoading(true);
    setTimeout(() => {
      router.push(`/dashboard/interview/${interviewId}/session`);
    }, 1200);
  }

  return (
    <div className="relative min-h-screen text-white flex flex-col">
      {/* Fullscreen gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-teal-900 via-indigo-900 to-purple-900 -z-10"></div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6">
        {/* Animated gradient blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse scale-[1.05]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-200 scale-[1.05]"></div>

        {/* Glass card */}
        <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl ring-1 ring-white/30 w-full max-w-lg text-center border border-white/20">
          <h2 className="text-3xl font-extrabold mb-2">AI Mock Interview</h2>
          <p className="text-gray-200 mb-6">
            Prepare for your dream job with a real-time AI interviewer.
          </p>

          {/* Interview Info */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-lg font-bold">30 min</p>
              <p className="text-sm text-gray-300">Time Limit</p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-lg font-bold">MERN</p>
              <p className="text-sm text-gray-300">Tech Stack</p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-lg font-bold">Medium</p>
              <p className="text-sm text-gray-300">Difficulty</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleStart}
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-500 rounded-xl font-semibold shadow-xl hover:scale-105 transition-transform disabled:opacity-50"
            >
              {loading ? "Loading..." : "🚀 Start Interview"}
            </button>

            <button className="px-6 py-3 bg-white/10 rounded-xl font-semibold shadow-xl hover:bg-white/20 transition">
              📄 Read Instructions
            </button>
          </div>

          <p className="mt-6 text-xs text-gray-400">Interview ID: {interviewId}</p>
        </div>
      </main>
    </div>
  );
}
