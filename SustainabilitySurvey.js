import React, { useState } from "react";

export default function SustainabilitySurvey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showReport, setShowReport] = useState(false);

  const questions = [
    { question: "What is your company's size?", options: ["Small", "Medium", "Large"] },
    { question: "What industry is your company in?", options: ["Manufacturing", "Retail", "Technology", "Other"] },
    { question: "Where is your company located?", options: ["North America", "Europe", "Asia", "Other"] },
    { question: "Does your company have a sustainability officer or committee?", options: ["Yes", "No"] },
    { question: "Does your company design products with recyclability in mind?", options: ["Yes", "No"] },
    { question: "Do you offer a take-back or recycling program for your products?", options: ["Yes", "No"] },
    { question: "Are you ready to invest in sustainability?", options: ["Yes", "No"] },
    { question: "Do you think sustainability is key for business success?", options: ["Yes", "No"] },
    { question: "Does your company provide sustainability training for employees?", options: ["Yes", "No"] },
    { question: "Has your company implemented measures to reduce carbon emissions?", options: ["Electric vehicles", "Carbon credits", "Remote work", "None", "Other"] },
    { question: "Does your company track its carbon footprint?", options: ["Yes", "No"] },
    { question: "What steps has your company taken to reduce water consumption?", options: ["Low-flow fixtures", "Water recycling", "Employee awareness", "None", "Other"] },
    { question: "Does your company monitor water usage?", options: ["Yes", "No"] }
  ];

  const responses = {
    "What is your company's size?": {
      Small: "As a small company, focusing on low-cost sustainability initiatives such as energy efficiency, remote work policies, and minimizing paper use can be beneficial.",
      Medium: "Being a medium-sized company, implementing formal sustainability policies, conducting energy audits, and engaging employees in green initiatives can strengthen your environmental impact.",
      Large: "As a large company, developing a company-wide sustainability strategy, setting measurable goals, and investing in renewable energy can drive significant change."
    }
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [questions[step].question]: answer });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowReport(true);
    }
  };

  const generateReport = () => {
    return Object.keys(answers).map(question => {
      return `${question}: ${answers[question]}. ${responses[question]?.[answers[question]] || ""}`;
    }).join(" ");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      {!showReport ? (
        <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-xl w-full text-center">
          <h1 className="text-4xl font-extrabold text-green-700 mb-6">🌍 Sustainability Survey</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">{questions[step].question}</h2>
          <div className="flex flex-col space-y-4">
            {questions[step].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-xl w-full text-left">
          <h3 className="text-green-700 font-bold text-2xl mb-4">Your Finished Short Report</h3>
          <p className="text-gray-700">{generateReport()}</p>
          <p className="text-gray-800 mt-4">If you are interested in a longer, more detailed report and our consulting service, please contact us.</p>
        </div>
      )}
    </div>
  );
}
