import React, { useState } from "react";

export default function SustainabilitySurvey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendations, setRecommendations] = useState(null);

  // Questions with geographical zones
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
    {
      question: "Which geographical zone is your company based in?", 
      options: ["North America", "Europe", "Asia", "Africa", "South America", "Oceania"]
    },
    {
      question: "Does your company have a corporate sustainability policy?",
      options: ["Yes", "No"]
    },
    {
      question: "What is your company’s approach to supply chain transparency?",
      options: ["Full transparency", "Partial transparency", "No transparency"]
    }
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
    
    // Question-specific tips and geographical zone-based recommendations
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

    // Geographical zone-based recommendations
    if (answers["Which geographical zone is your company based in?"] === "North America") {
      advice += "- North America has strong regulations supporting renewable energy. Look into tax credits for renewable energy systems. \n";
    } else if (answers["Which geographical zone is your company based in?"] === "Europe") {
      advice += "- Europe is committed to reducing carbon emissions. Consider joining the European Union’s Green Deal initiatives. \n";
    } else if (answers["Which geographical zone is your company based in?"] === "Asia") {
      advice += "- Asia is home to many rapidly developing countries. Consider investing in energy-efficient technologies to reduce your carbon footprint. \n";
    } else if (answers["Which geographical zone is your company based in?"] === "Africa") {
      advice += "- Africa faces significant challenges with water scarcity. Implement water conservation programs to help your community. \n";
    } else if (answers["Which geographical zone is your company based in?"] === "South America") {
      advice += "- South America has rich biodiversity, so consider investing in projects that preserve forests and natural resources. \n";
    } else if (answers["Which geographical zone is your company based in?"] === "Oceania") {
      advice += "- Oceania is highly vulnerable to climate change. Look into disaster-resilient infrastructure and energy-efficient technologies. \n";
    }

    if (answers["Does your company have a corporate sustainability policy?"] === "No") {
      advice += "- Establishing a corporate sustainability policy will help guide your company's efforts toward environmental responsibility. \n";
    }

    if (answers["What is your company’s approach to supply chain transparency?"] === "No transparency") {
      advice += "- Increasing transparency in your supply chain is essential. Use technology to track your suppliers' sustainability practices. \n";
    }

    setRecommendations(advice);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 text-white">
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
