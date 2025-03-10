import React, { useState } from "react";

export default function SustainabilitySurvey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendations, setRecommendations] = useState(null);

  const questions = [
    { question: "What is your company's size?", options: ["Small", "Medium", "Large"] },
    { question: "Does your company track energy consumption?", options: ["Yes", "No"] },
    { question: "What is your primary energy source?", options: ["Renewable", "Non-renewable", "Mixed"] },
    { question: "Do you have a waste management strategy?", options: ["Yes", "No"] },
    { question: "How does your company reduce water usage?", options: ["Water recycling", "Efficient appliances", "Not at all"] },
    { question: "Does your company offset its carbon footprint?", options: ["Yes", "No", "Planning to"] },
    { question: "Do you source materials sustainably?", options: ["Yes", "No", "Partially"] },
  ];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [questions[step].question]: answer });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = () => {
    setRecommendations("🌱 Thank you for completing the sustainability survey! Your responses will help generate tailored recommendations.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 bg-opacity-90 px-6 py-12">
      
      {/* Survey Container */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 tracking-wide">
          🌍 Sustainability Survey
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-6">
          <div 
            className="bg-green-500 h-full transition-all duration-300" 
            style={{ width: `${((step + 1) / questions.length) * 100}%` }} 
          />
        </div>

        {/* Survey Question */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {questions[step].question}
        </h2>

        {/* Options */}
        <div className="flex flex-col space-y-3">
          {questions[step].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105 shadow-md"
            >
              {option}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <p className="text-gray-600 mt-4">Question {step + 1} of {questions.length}</p>
      </div>

      {/* Recommendations Section */}
      {recommendations && (
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-2xl max-w-lg w-full text-center">
          <h3 className="text-green-700 font-bold text-2xl mb-2">Your Results</h3>
          <p className="text-gray-700">{recommendations}</p>
        </div>
      )}
    </div>
  );
}

