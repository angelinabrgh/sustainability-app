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
      question: "What is your company’s water consumption per year? (Estimate in Liters)",
      options: ["<10,000 L", "10,000 - 50,000 L", "50,000 - 100,000 L", ">100,000 L"]
    },
    {
      question: "What is your company's current carbon footprint per year?",
      options: ["<100 tons", "100 - 500 tons", "500 - 1000 tons", ">1000 tons"]
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

    // Company size-specific recommendations (SMART goals)
    if (answers["What is your company's size?"] === "Small") {
      advice += "- **SMART Goal**: Reduce energy consumption by 10% within the next 12 months by switching to energy-efficient light bulbs and ensuring equipment is powered off after hours. Measure savings with your utility bills.\n";
      advice += "- **SMART Goal**: Aim for 50% waste reduction within 6 months by implementing a recycling program in your office. Track waste weekly and engage employees with a sustainability challenge.\n";
    } else if (answers["What is your company's size?"] === "Medium") {
      advice += "- **SMART Goal**: Reduce overall energy consumption by 15% in the next year. This can be achieved by upgrading to energy-efficient HVAC systems and investing in solar panels. Track energy savings monthly using smart meters.\n";
      advice += "- **SMART Goal**: Commit to zero waste by the end of 2024. This includes reducing office paper usage by 80% within 6 months and ensuring 100% of waste is recycled or composted. Measure progress monthly.\n";
    } else if (answers["What is your company's size?"] === "Large") {
      advice += "- **SMART Goal**: Implement a company-wide carbon neutrality plan by 2030. Set interim goals such as reducing carbon emissions by 25% over the next 5 years. Invest in renewable energy projects and ensure 100% of offices are LEED certified by 2025.\n";
      advice += "- **SMART Goal**: Offset your company’s carbon footprint by 40% in 3 years by investing in large-scale renewable energy projects and reforestation initiatives. Measure success by tracking emissions annually.\n";
    }

    // Energy consumption
    if (answers["Does your company track energy consumption?"] === "No") {
      advice += "- **SMART Goal**: Start tracking energy consumption by installing smart meters in the next 2 months. Aim to reduce energy waste by 5% within 6 months.\n";
    }

    if (answers["What is your primary energy source?"] === "Non-renewable") {
      advice += "- **SMART Goal**: Transition to renewable energy by 2025. Begin with 10% renewable energy usage next year and gradually increase by 10% each year. Track progress using your monthly energy bills.\n";
    } else if (answers["What is your primary energy source?"] === "Mixed") {
      advice += "- **SMART Goal**: Increase renewable energy usage by 20% within 18 months. Investigate renewable energy options available in your region and create a plan for future adoption.\n";
    }

    if (answers["Do you have a waste management strategy?"] === "No") {
      advice += "- **SMART Goal**: Develop and implement a waste management strategy within 3 months. Start by recycling paper and electronics, and aim for 50% waste diversion from landfills within 6 months.\n";
    } else if (answers["Do you have a waste management strategy?"] === "Yes") {
      advice += "- **SMART Goal**: Move towards a zero-waste goal by 2025. Within 6 months, establish a company-wide composting program and reduce plastic usage by 40%. Track waste reduction monthly.\n";
    }

    // Water usage
    if (answers["How does your company reduce water usage?"] === "Not at all") {
      advice += "- **SMART Goal**: Install water-saving devices, such as low-flow faucets and toilets, within 3 months. Aim for a 20% reduction in water consumption by year-end, and track progress monthly.\n";
    } else if (answers["How does your company reduce water usage?"] === "Efficient appliances") {
      advice += "- **SMART Goal**: Reduce water usage by 15% within 12 months by adding rainwater collection systems for irrigation. Track the amount of water saved monthly.\n";
    }

    // Carbon footprint
    if (answers["Does your company offset its carbon footprint?"] === "No") {
      advice += "- **SMART Goal**: Begin offsetting your carbon footprint by 5% next year by investing in carbon offset programs and planting trees. Track your emissions annually and aim for a 10% offset within 3 years.\n";
    }

    if (answers["Do you source materials sustainably?"] === "No") {
      advice += "- **SMART Goal**: Within the next 6 months, switch to sustainable suppliers that source materials from certified ethical sources. Track the percentage of sustainably sourced materials monthly and aim for 100% by 2025.\n";
    }

    // Geographical zone-specific recommendations
    if (answers["Which geographical zone is your company based in?"] === "North America") {
      advice += "- **SMART Goal**: As part of the North American transition to green energy, your company should aim to reduce its energy usage by 20% within 18 months by switching to solar or wind energy. Research local grants and incentives.\n";
    } else if (answers["Which geographical zone is your company based in?"] === "Europe") {
      advice += "- **SMART Goal**: Leverage EU regulations to move towards carbon neutrality. Set an intermediate goal of reducing emissions by 15% by the end of 2024, and track progress quarterly.\n";
    } else if (answers["Which geographical zone is your company based in?"] === "Asia") {
      advice += "- **SMART Goal**: Invest in energy-efficient technologies and set a target of reducing energy consumption by 25% over the next 3 years. Begin with a pilot program in your largest office.\n";
    } else if (answers["Which geographical zone is your company based in?"] === "Africa") {
      advice += "- **SMART Goal**: In Africa, water conservation is critical. Implement water-saving technologies such as rainwater harvesting within the next 6 months. Set a goal to reduce water usage by 30% within 12 months.\n";
    } else if (answers["Which geographical zone is your company based in?"] === "South America") {
      advice += "- **SMART Goal**: In South America, invest in reforestation programs to offset carbon emissions. Set a target to plant 10,000 trees in the next 12 months and measure the carbon offset achieved.\n";
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
