"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function InterviewList({ interviews }) {
  const router = useRouter();

  if (!interviews || interviews.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No interviews scheduled yet.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Your Interviews</h2>
      <ul className="space-y-3">
        {interviews.map(({ id, title, date, status }) => (
          <li
            key={id}
            onClick={() => router.push(`/dashboard/interview/${id}/start`)}
            className="cursor-pointer border rounded-lg p-4 hover:bg-indigo-50 transition flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">{title || `Interview #${id}`}</h3>
              <p className="text-sm text-gray-600">
                {new Date(date).toLocaleString()}
              </p>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                status === "completed"
                  ? "bg-green-200 text-green-800"
                  : status === "pending"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {status || "Scheduled"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
