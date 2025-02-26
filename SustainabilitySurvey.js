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
    { question: "Do you source materials sustainably?", options: ["Yes", "No", "Partially"] }
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
    let advice = "✅ Thank you for completing the assessment! 🌱 Here are some tailored sustainability recommendations based on your responses: \n";
    if (answers["Does your company track energy consumption?"] === "No") {
      advice += "- Consider implementing an energy monitoring system to track consumption. \n";
    }
    if (answers["What is your primary energy source?"] === "Non-renewable") {
      advice += "- Switching to renewable energy sources like solar or wind can greatly reduce emissions. \n";
    }
    if (answers["Do you have a waste management strategy?"] === "No") {
      advice += "- Develop a waste reduction plan that includes recycling and composting programs. \n";
    }
    if (answers["Does your company offset its carbon footprint?"] === "No") {
      advice += "- Explore carbon offset programs to counterbalance emissions. \n";
    }
    if (answers["Do you source materials sustainably?"] === "No") {
      advice += "- Partner with suppliers who follow ethical and sustainable sourcing practices. \n";
    }
    setRecommendations(advice);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6 text-white">
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-3xl w-full text-center text-gray-900">
        <h1 className="text-4xl font-extrabold text-green-600 mb-6">Sustainability Assessment</h1>
        
        {recommendations ? (
          <div className="text-lg text-gray-700 text-left whitespace-pre-line">
            {recommendations}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{questions[step].question}</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              {questions[step].options.map((option) => (
                <button 
                  key={option} 
                  onClick={() => handleAnswer(option)}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out font-semibold transform hover:scale-105"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
