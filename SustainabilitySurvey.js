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
    let advice = "✅ Thank you for completing the assessment! 🌱 Here are some tailored sustainability recommendations based on your responses: \n";
    
    // **Company Size** - Focus on Practical, Actionable Goals
    if (answers["What is your company's size?"] === "Small") {
      advice += "- **Goal**: As a small company, sustainability efforts can have a significant, visible impact. Begin by reducing your energy consumption through a combination of upgrading to LED lighting, and scheduling regular energy audits. Your goal should be to reduce overall energy use by 15% in 12 months. Start by engaging your employees with energy-saving challenges, and track your progress using monthly electricity bills.\n";
      advice += "- **Goal**: Focus on waste reduction by starting small. Aim to achieve a 50% reduction in waste within 6 months by establishing a paper recycling program. Educate your employees about the importance of recycling and offer incentives for reducing waste.\n";
    } else if (answers["What is your company's size?"] === "Medium") {
      advice += "- **Goal**: As a medium-sized business, you have more room to implement scalable energy solutions. Upgrade your HVAC systems to energy-efficient models within 6 months, and begin transitioning to solar energy for at least 15% of your electricity usage. Aim for a 20% reduction in overall energy consumption in the next 18 months.\n";
      advice += "- **Goal**: Reduce your water usage by 25% within the next year. Install water-efficient appliances like low-flow toilets and urinals in all offices, and monitor water usage monthly through smart meters.\n";
    } else if (answers["What is your company's size?"] === "Large") {
      advice += "- **Goal**: As a large company, sustainability must be embedded across all levels. Aim for a **50% reduction in carbon emissions** within 5 years, starting with an investment in renewable energy like solar or wind power. To kick off, purchase renewable energy certificates (RECs) to cover 20% of your energy usage in the first year. This can be tracked using yearly carbon audits.\n";
      advice += "- **Goal**: Implement an extensive waste management program that goes beyond recycling. Aim for zero waste by 2025 by introducing a company-wide composting program and reducing single-use plastics by 75% within the next 12 months. This should be tracked through quarterly waste audits.\n";
    }

    // **Energy Consumption**
    if (answers["Does your company track energy consumption?"] === "No") {
      advice += "- **Goal**: Start tracking energy consumption within the next month. Begin with installing smart meters and set monthly energy consumption targets for the next 6 months to reduce energy use by 10%. Gradually implement energy-saving technologies, such as LED lighting and programmable thermostats.\n";
    }

    // **Primary Energy Source**
    if (answers["What is your primary energy source?"] === "Non-renewable") {
      advice += "- **Goal**: Commit to transitioning 20% of your energy consumption to renewable sources in the next 12 months. Begin by evaluating the feasibility of installing solar panels or purchasing green energy from your provider. If direct energy conversion isn’t possible, focus on carbon offset programs.\n";
    } else if (answers["What is your primary energy source?"] === "Mixed") {
      advice += "- **Goal**: Transition 10% of your energy use to renewable sources by the end of this year. Work with local renewable energy suppliers and track your energy consumption via monthly energy reports.\n";
    }

    // **Waste Management**
    if (answers["Do you have a waste management strategy?"] === "No") {
      advice += "- **Goal**: Develop and implement a formal waste management strategy within 6 months. Start by tracking your waste, and aim to divert at least 30% of it from landfills in the first year. Include strategies for reducing single-use plastics and increasing recycling rates.\n";
    } else if (answers["Do you have a waste management strategy?"] === "Yes") {
      advice += "- **Goal**: Expand your waste management strategy to include more comprehensive programs such as **zero-waste initiatives**. Aim for zero waste by 2025 and reduce your landfill waste by 40% within the next year. Regularly report on your progress to all employees.\n";
    }

    // **E-waste Management**
    if (answers["How does your company handle and manage its e-waste?"] === "Disposal in landfills") {
      advice += "- **Goal**: Make e-waste management a priority within the next 6 months. Set up a formal process for recycling all e-waste and commit to sending 100% of it to certified recycling centers. Track and report the amount of e-waste collected every quarter.\n";
    }

    // **Carbon Footprint**
    if (answers["Does your company offset its carbon footprint?"] === "No") {
      advice += "- **Goal**: Begin offsetting your carbon footprint by investing in carbon credits. Your first step should be to offset 10% of your annual emissions in the next 12 months, with the goal of reaching 50% by 2025.\n";
    }

    // **Sourcing Materials Sustainably**
    if (answers["Do you source materials sustainably?"] === "No") {
      advice += "- **Goal**: Start sourcing sustainable materials by identifying at least 3 ethical suppliers within the next 6 months. Make it a priority to ensure that all materials used in production are certified by sustainable and ethical standards by 2025.\n";
    }

    // **Supply Chain Transparency**
    if (answers["What is your company’s approach to supply chain transparency?"] === "No transparency") {
      advice += "- **Goal**: Increase supply chain transparency by 50% within the next 12 months. Begin by tracking and reporting the environmental impact of at least 30% of your suppliers, focusing on reducing the carbon footprint and ensuring ethical labor practices.\n";
    }

    // **Geographical Zone-Specific Recommendations**
    if (answers["Which geographical zone is your company based in?"] === "North America") {
      advice += "- **Goal**: In North America, you can take advantage of federal and state-level incentives for green energy initiatives. Work towards achieving a **30% reduction in emissions** by 2025 by transitioning your entire fleet to electric vehicles and installing solar panels on your office buildings.\n";
    } else if (answers["Which geographical zone is your company based in?"] === "Europe") {
      advice += "- **Goal**: The European Green Deal offers great support for sustainability efforts. Aim to reduce your carbon emissions by 40% by 2030, focusing on implementing energy-saving infrastructure and investing in renewable energy.\n";
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

