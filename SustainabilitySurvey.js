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
      
      {/* Survey Container - Centered Box */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-xl w-full text-center">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 tracking-wide">
          🌍 Sustainability Survey
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden mb-6">
          <div 
            className

