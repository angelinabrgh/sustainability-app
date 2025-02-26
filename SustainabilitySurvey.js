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

    // **Company Size** - Focus on Practical, Actionable Goals
    if (answers["What is your company's size?"] === "Small") {
      advice += `
      **Recommendations for Small Companies:**
      - **Goal**: Reduce energy consumption by 15% within 12 months by upgrading to LED lighting and scheduling monthly energy audits.
      - **Action**: Start with a 10% reduction in electricity bills by reducing equipment usage after hours. Measure success using monthly utility bills.
      - **Action**: Encourage employee participation by offering incentives for energy-saving initiatives. Track progress by measuring energy use per employee.
      - **Action**: Conduct simple employee workshops to raise awareness about energy-saving and sustainability practices.
      - **Timeframe**: 12 months for a 15% reduction in energy consumption.
      `;
    } else if (answers["What is your company's size?"] === "Medium") {
      advice += `
      **Recommendations for Medium-Sized Companies:**
      - **Goal**: Reduce overall energy consumption by 20% in 18 months.
      - **Action**: Implement energy-efficient HVAC systems and upgrade insulation to reduce heating/cooling costs.
      - **Action**: Install energy-saving appliances and automate lighting controls in office spaces.
      - **Action**: Implement a system for monitoring energy consumption using smart meters, aiming for a 20% reduction within 18 months.
      - **Timeframe**: 18 months for a 20% reduction in energy consumption.
      `;
    } else if (answers["What is your company's size?"] === "Large") {
      advice += `
      **Recommendations for Large Companies:**
      - **Goal**: Achieve a 50% reduction in carbon emissions by 2025.
      - **Action**: Invest in large-scale renewable energy projects, such as solar panel installations on office buildings or switching to wind energy for operations.
      - **Action**: Transition your entire fleet to electric vehicles by 2027 and achieve carbon neutrality by 2030.
      - **Action**: Track emissions using carbon footprint tools and ensure all branches and offices follow the same sustainability measures.
      - **Timeframe**: 50% reduction in carbon emissions by 2025.
      `;
    }

    // **Energy Consumption**
    if (answers["Does your company track energy consumption?"] === "No") {
      advice += `
      **Recommendations for Energy Consumption Tracking:**
      - **Goal**: Start tracking energy consumption within the next month.
      - **Action**: Install smart meters across all company facilities to monitor real-time energy use.
      - **Action**: Set a target to reduce energy use by 10% within 6 months.
      - **Action**: Create a monthly report to monitor progress and identify energy-intensive processes.
      - **Timeframe**: Begin tracking within 1 month, aim for 10% reduction in 6 months.
      `;
    }

    // **Primary Energy Source**
    if (answers["What is your primary energy source?"] === "Non-renewable") {
      advice += `
      **Recommendations for Transitioning to Renewable Energy:**
      - **Goal**: Transition 20% of energy use to renewable sources within 12 months.
      - **Action**: Start with a purchase of renewable energy credits (RECs) to offset 20% of your energy usage.
      - **Action**: Research installation options for solar or wind energy systems at your headquarters or manufacturing facility.
      - **Action**: Partner with a renewable energy supplier to shift 20% of your power source to green energy.
      - **Timeframe**: Achieve 20% renewable energy usage within 12 months.
      `;
    }

    // **Waste Management**
    if (answers["Do you have a waste management strategy?"] === "No") {
      advice += `
      **Recommendations for Waste Management Strategy:**
      - **Goal**: Develop and implement a waste management strategy within the next 6 months.
      - **Action**: Start with basic paper recycling and ensure that all employees use designated bins for recycling paper, plastic, and metals.
      - **Action**: Partner with a certified waste management company to track waste types and optimize for recycling.
      - **Timeframe**: 6 months for a full waste management implementation.
      `;
    } else if (answers["Do you have a waste management strategy?"] === "Yes") {
      advice += `
      **Recommendations for Optimizing Waste Management:**
      - **Goal**: Achieve 100% recycling and composting in the next 12 months.
      - **Action**: Implement a company-wide composting initiative for organic waste and ensure employees have access to compost bins.
      - **Action**: Introduce a zero-waste policy for office events, eliminating single-use plastics and disposable cutlery.
      - **Timeframe**: Achieve 100% recycling and composting within 12 months.
      `;
    }

    // **Water Usage**
    if (answers["How does your company reduce water usage?"] === "Not at all") {
      advice += `
      **Recommendations for Water Conservation:**
      - **Goal**: Reduce water usage by 20% in the next 6 months.
      - **Action**: Install water-saving devices such as low-flow faucets, low-flow toilets, and motion-sensor taps in all company facilities.
      - **Action**: Introduce a policy for employees to use water responsibly and track water usage monthly.
      - **Timeframe**: Achieve 20% reduction within 6 months.
      `;
    }

    // **Carbon Footprint**
    if (answers["Does your company offset its carbon footprint?"] === "No") {
      advice += `
      **Recommendations for Carbon Offset:**
      - **Goal**: Begin offsetting 10% of your carbon footprint by investing in certified carbon offset programs.
      - **Action**: Research certified carbon offset programs such as tree planting or renewable energy projects.
      - **Action**: Commit to purchasing carbon credits or investing in local environmental programs to offset your emissions.
      - **Timeframe**: Offset 10% of emissions within 12 months.
      `;
    }

    // **Supply Chain Transparency**
    if (answers["What is your company’s approach to supply chain transparency?"] === "No transparency") {
      advice += `
      **Recommendations for Supply Chain Transparency:**
      - **Goal**: Achieve full transparency within the next 12 months.
      - **Action**: Work with suppliers to identify their sustainability practices and audit the supply chain.
      - **Action**: Publish a sustainability report detailing supply chain sourcing and any environmental concerns.
      - **Timeframe**: Full transparency within 12 months.
      `;
    }

    // **Geographical Zone-Specific Recommendations**
    if (answers["Which geographical zone is your company based in?"] === "North America") {
      advice += `
      **Recommendations for North America:**
      - **Goal**: Transition 30% of your operations to renewable energy sources in the next 2 years.
      - **Action**: Start by purchasing renewable energy certificates (RECs) for 15% of your energy needs.
      - **Action**: Explore tax credits available for solar energy installations.
      - **Timeframe**: Achieve 30% renewable energy usage within 24 months.
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
