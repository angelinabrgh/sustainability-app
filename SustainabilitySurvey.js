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
    },
    {
      question: "How does your company handle and manage its e-waste?",
      options: ["Recycling", "Disposal in landfills", "No strategy"]
    },
    {
      question: "Does your company invest in employee sustainability education?",
      options: ["Yes", "No", "Planning to"]
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
    let advice = "✅ Thank you for completing the assessment! 🌱 Here are some tailored sustainability recommendations based on your responses:\n\n";

    // **Company Size** - Actionable Steps for Each Size
    if (answers["What is your company's size?"] === "Small") {
      advice += `
      **Recommendations for Small Companies:**
      - **Energy Reduction:**
        - **Goal**: Achieve a 15% reduction in energy consumption over 12 months.
        - **Action**: Install energy-efficient LED lighting and ensure that all equipment is turned off after hours.
        - **Action**: Start tracking your energy consumption via monthly electricity bills to monitor progress.
        - **Milestone**: Achieve a 5% reduction in energy usage within the first 3 months.

      - **Waste Reduction:**
        - **Goal**: Cut waste by 50% within 6 months.
        - **Action**: Start a recycling program for paper, cardboard, and plastic.
        - **Action**: Reduce office printing by 70% by transitioning to digital documents.
        - **Milestone**: Achieve a 25% reduction in paper waste within the first 3 months.
        
      - **Employee Engagement:**
        - **Goal**: Increase employee participation in sustainability by 30%.
        - **Action**: Launch a monthly "green challenge" with incentives for sustainable behaviors (e.g., turning off lights, reducing paper use).
        - **Milestone**: Engage at least 50% of employees in the first 6 months.
      `;
    } else if (answers["What is your company's size?"] === "Medium") {
      advice += `
      **Recommendations for Medium-Sized Companies:**
      - **Energy Efficiency:**
        - **Goal**: Reduce energy consumption by 20% in 18 months.
        - **Action**: Upgrade to energy-efficient HVAC systems and automate lighting controls in offices.
        - **Milestone**: Install energy-efficient systems in 30% of your office spaces within the first 6 months.
        
      - **Water Conservation:**
        - **Goal**: Reduce water consumption by 25% over the next year.
        - **Action**: Install water-saving fixtures such as low-flow toilets and faucets.
        - **Action**: Introduce a water monitoring system to track consumption and identify wasteful areas.
        - **Milestone**: Achieve a 10% reduction in water use by the first 6 months.

      - **Waste Management:**
        - **Goal**: Reach 75% recycling by the end of the year.
        - **Action**: Partner with a local recycling company to handle all recyclable materials.
        - **Action**: Introduce composting in your office kitchens for food waste.
        - **Milestone**: Introduce a composting program within 3 months, aiming for a 30% reduction in landfill waste.
      `;
    } else if (answers["What is your company's size?"] === "Large") {
      advice += `
      **Recommendations for Large Companies:**
      - **Energy Sustainability:**
        - **Goal**: Achieve a 50% reduction in carbon emissions by 2025.
        - **Action**: Transition 50% of your energy use to solar or wind power within 3 years.
        - **Milestone**: Begin with 20% renewable energy usage within the first year, and scale up by 10% annually.
        
      - **Carbon Neutrality:**
        - **Goal**: Achieve carbon neutrality by 2030.
        - **Action**: Invest in large-scale renewable energy projects and carbon offset programs.
        - **Action**: Set up a carbon management team to oversee your emissions and ensure continuous improvement.
        - **Milestone**: Offset 10% of your carbon emissions in the first year through tree planting and renewable energy credits.

      - **Sustainability Policy:**
        - **Goal**: Integrate sustainability at the core of your operations by 2025.
        - **Action**: Publish a corporate sustainability report every year that highlights your efforts and progress.
        - **Milestone**: Achieve 100% supply chain sustainability transparency by 2024.
      `;
    }

    // **Energy Consumption**
    if (answers["Does your company track energy consumption?"] === "No") {
      advice += `
      **Recommendations for Energy Consumption Tracking:**
      - **Goal**: Start tracking energy consumption within the next 1 month.
      - **Action**: Install smart meters across all company facilities to monitor real-time energy use.
      - **Action**: Begin by setting a target to reduce energy consumption by 10% within 6 months.
      - **Milestone**: Reduce energy consumption by 5% within the first 3 months.

      - **Action**: Implement a monthly energy usage report that helps identify areas for improvement.
      `;
    }

    // **Carbon Footprint**
    if (answers["Does your company offset its carbon footprint?"] === "No") {
      advice += `
      **Recommendations for Carbon Offset:**
      - **Goal**: Offset 10% of your company’s carbon footprint within the next 12 months.
      - **Action**: Start by investing in carbon credits through certified programs.
      - **Action**: Plant trees in areas that need reforestation, aiming to offset at least 5% of your total emissions within the first year.
      - **Milestone**: Offset 5% of emissions by year-end.
      `;
    }

    // **Geographical Zone-Specific Recommendations**
    if (answers["Which geographical zone is your company based in?"] === "North America") {
      advice += `
      **Recommendations for North America:**
      - **Goal**: Transition 30% of your operations to renewable energy sources within the next 2 years.
      - **Action**: Research tax credits for solar energy installations, and aim to install solar panels on your facilities by 2024.
      - **Action**: Implement electric vehicle (EV) charging stations at your office locations to encourage sustainable commuting.
      - **Milestone**: Achieve 30% renewable energy usage by 2025.
      `;
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
