"use client";

import React from "react";
import PlanData from "../utils/PlanData";

export default function Pricing() {
  const handleGetStarted = (planId) => {
    alert(`You selected the ${planId} plan!`);
    // You can replace this alert with navigation or API call
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-8 md:grid-cols-3">
      {PlanData.map((plan) => (
        <div
          key={plan.id}
          className="border rounded-lg p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-3xl font-extrabold mb-6">${plan.price} / month</p>
            <ul className="mb-6 list-disc list-inside space-y-1 text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => handleGetStarted(plan.id)}
            className="mt-auto bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}
