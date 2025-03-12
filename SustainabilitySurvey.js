import React, { useState } from "react";

export default function SustainabilitySurvey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showReport, setShowReport] = useState(false);

  const questions = [
    { question: "What is your company's size?", options: ["Small", "Medium", "Large"] },
    { question: "What industry is your company in?", options: ["Manufacturing", "Retail", "Technology", "Other"] },
    { question: "Where is your company located?", options: ["North America", "Europe", "Asia", "Other"] },
    { question: "Does your company track energy consumption?", options: ["Yes", "No"] },
    { question: "What is your primary energy source?", options: ["Renewable", "Non-renewable", "Mixed"] },
    { question: "Do you have a waste management strategy?", options: ["Yes", "No"] },
    { question: "How does your company reduce water usage?", options: ["Water recycling", "Efficient appliances", "Not at all"] },
    { question: "Does your company offset its carbon footprint?", options: ["Yes", "No", "Planning to"] },
    { question: "Do you source materials sustainably?", options: ["Yes", "No", "Partially"] },
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
    "Does your company have a sustainability officer or committee?": {
      Yes: "Oversees sustainability strategy and compliance with ESG regulations, engages stakeholders, and ensures long-term goals are met.",
      No: "Consider forming a committee or appointing an officer to integrate sustainability into business operations."
    },
    "Does your company design products with recyclability in mind?": {
      Yes: "AI-driven designs, modular products, and QR codes for recycling tracking can improve sustainability.",
      No: "Switch to sustainable materials, biodegradable packaging, and extend product lifespans."
    },
    "Do you offer a take-back or recycling program for your products?": {
      Yes: "Enhance return processes with drop-off points, customer incentives, and better sorting technologies.",
      No: "Consider collaborating with recyclers and implementing a return program for product lifecycle extension."
    },
    "Are you ready to invest in sustainability?": {
      Yes: "Assess ESG status, invest in energy-efficient upgrades, and explore sustainable financing options.",
      No: "Implement small changes like LED lights, digital invoices, and regulatory alignments for gradual sustainability adoption."
    },
    "Do you think sustainability is key for business success?": {
      Yes: "Sustainability reduces costs, improves brand reputation, and aligns with customer expectations.",
      No: "Consider the competitive advantages sustainability offers in cost reduction and compliance."
    },
    "Has your company implemented measures to reduce carbon emissions?": {
      "Electric vehicles": "Transitioning to EVs can reduce fleet emissions by 50%.",
      "Carbon credits": "Carbon credits can cut emissions by 70% when paired with other green initiatives.",
      "Remote work": "Remote work policies reduce commuting emissions by 54%.",
      "None": "Significant carbon reduction opportunities are being missed.",
      "Other": "A custom approach to carbon reduction can provide unique advantages."
    },
    "Does your company track its carbon footprint?": {
      Yes: "Systematic tracking enables a 20-25% improvement in targeted emission reductions.",
      No: "Without tracking, key carbon reduction opportunities may be overlooked."
    },
    "What steps has your company taken to reduce water consumption?": {
      "Low-flow fixtures": "Reduces water usage by 30%.",
      "Water recycling": "Enables up to 80% water reuse.",
      "Employee awareness": "Fosters conservation culture with 20% savings.",
      "None": "Misses opportunities for up to 25% water savings.",
      "Other": "Innovative strategies align with best sustainability practices."
    },
    "Does your company monitor water usage?": {
      Yes: "Monitoring improves efficiency by around 20%.",
      No: "Lack of monitoring may limit water conservation efforts."
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

  return (
    <div 
  <div className="min-h-screen flex flex-col items-center justify-center bg-nature bg-cover bg-center bg-fixed px-6 py-12">
  style={{
    backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/29/04/17/sunrise-1865138_1920.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh"
  }}
>

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
        <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-xl w-full text-center">
          <h3 className="text-green-700 font-bold text-2xl mb-2">Your Sustainability Report</h3>
          {Object.keys(answers).map((question, index) => (
            <div key={index} className="text-left my-4">
              <h4 className="font-semibold text-gray-800">{question}</h4>
              <p className="text-gray-600">Your Answer: {answers[question]}</p>
              <p className="text-gray-700 font-medium">{responses[question]?.[answers[question]] || "Thank you for your response!"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
