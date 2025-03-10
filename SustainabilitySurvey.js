import React, { useState } from "react";

export default function SustainabilitySurvey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendations, setRecommendations] = useState(null);

  const questions = [
    { 
      question: "What is your company's size?", 
      options: ["Small", "Medium", "Large"] 
    },
    { 
      question: "Does your company track energy consumption?", 
      options: ["Yes", "No"] 
    },
    { 
      question: "What is your primary energy source?", 
      options: ["Renewable", "Non-renewable", "Mixed"] 
    },
    { 
      question: "Do you have a waste management strategy?", 
      options: ["Yes", "No"] 
    },
    { 
      question: "How does your company reduce water usage?", 
      options: ["Water recycling", "Efficient appliances", "Not at all"] 
    },
    { 
      question: "Does your company offset its carbon footprint?", 
      options: ["Yes", "No", "Planning to"] 
    },
    { 
      question: "Do you source materials sustainably?", 
      options: ["Yes", "No", "Partially"] 
    },
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
    setRecommendations("Thank you for completing the sustainability survey! 🌱 Your responses will help generate tailored recommendations.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 px-4 py-8">
      
      {/* Title */}
      <h1 className="text-green-800 text-3xl font-bold mb-6 text-center shadow-md">
        🌿 Sustainability Assessment 🌿
      </h1>

      {/* Survey Container */}
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg w-full">
        
        {/* Survey Question */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          {questions[step].question}
        </h2>

        {/* Options */}
        <div className="flex flex-col space-y-3">
          {questions[step].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md"
            >
              {option}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <p className="text-gray-600 mt-4 text-center">
          Question {step + 1} of {questions.length}
        </p>
      </div>

      {/* Recommendations Section */}
      {recommendations && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md max-w-lg w-full">
          <h3 className="text-green-700 font-bold text-lg text-center">Results</h3>
          <p className="text-gray-700 text-center mt-2">{recommendations}</p>
        </div>
      )}
    </div>
  );
}

