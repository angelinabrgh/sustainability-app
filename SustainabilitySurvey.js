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
    
    // Company size-specific recommendations
    if (answers["What is your company's size?"] === "Small") {
      advice += "- As a small company, your sustainability initiatives can have a significant impact on your community. Focus on creating a culture of sustainability among your employees. Begin with simple steps like reducing paper usage and implementing energy-efficient lighting. Engage with local sustainability groups to form partnerships and amplify your efforts. A small company can also leverage local grants for green initiatives, making sustainability more affordable. \n";
    } else if (answers["What is your company's size?"] === "Medium") {
      advice += "- Medium-sized companies have the advantage of reaching a wider customer base. As you grow, it’s essential to scale your sustainability practices to match. Begin by adopting energy-efficient technologies and considering larger investments in renewable energy, such as installing solar panels. With a moderate number of employees, focus on reducing waste by promoting recycling and composting in your offices. Additionally, encourage your employees to use public transport or consider setting up a bike-to-work program. \n";
    } else if (answers["What is your company's size?"] === "Large") {
      advice += "- As a large corporation, you have the ability and responsibility to lead the charge in sustainability. Start by ensuring that your energy consumption is efficient and sustainable. Consider an energy audit to identify opportunities to reduce energy waste. Implement sustainability at the core of your business model by investing in green technologies, including energy-efficient machinery and low-carbon options for transportation. Engage your employees in sustainability initiatives and create a company-wide sustainability policy. Additionally, you should publicly commit to carbon neutrality, aiming for net-zero emissions by 2050. \n";
    }
    
    // Energy consumption tracking
    if (answers["Does your company track energy consumption?"] === "No") {
      advice += "- It is crucial to begin tracking your energy consumption to understand where improvements can be made. Start by installing smart meters that will allow you to monitor energy use in real-time. This will help you identify inefficient energy practices, such as outdated equipment or lighting systems. Begin small by changing light bulbs to LED and powering down equipment when not in use. For larger companies, consider setting up energy management systems to help identify key areas of energy waste. Implementing an energy efficiency program will save costs in the long term and reduce your environmental impact. \n";
    }

    if (answers["What is your primary energy source?"] === "Non-renewable") {
      advice += "- Transitioning from non-renewable to renewable energy sources is one of the most impactful changes your company can make. Start by researching renewable energy suppliers in your area, or consider installing solar panels or wind turbines if your location and budget allow. Even if you can't make the full transition immediately, you can offset your energy use by purchasing renewable energy credits (RECs). Also, look into government incentives or rebates that support the installation of renewable energy infrastructure. \n";
    } else if (answers["What is your primary energy source?"] === "Mixed") {
      advice += "- If your energy source is mixed, aim to gradually increase your reliance on renewable energy. Consider setting a target to shift 10-20% of your energy use to renewable sources within the next year. Additionally, implement energy-saving strategies across the company, such as turning off unused equipment and using programmable thermostats. Track your progress towards energy reduction goals and report it transparently to employees and stakeholders. \n";
    }

    if (answers["Do you have a waste management strategy?"] === "No") {
      advice += "- Developing a waste management strategy is an essential first step towards sustainability. Start by conducting a waste audit to identify the largest sources of waste in your business. Implement a recycling program for paper, plastics, and metals, and aim to reduce single-use plastic usage across your operations. Establish a system for composting organic waste if possible. For offices, encourage employees to use digital documents instead of printing, and promote a paperless workflow. \n";
    } else if (answers["Do you have a waste management strategy?"] === "Yes") {
      advice += "- A well-established waste management strategy can significantly reduce your environmental footprint. Enhance your current program by focusing on zero-waste initiatives, including reducing packaging waste and reusing materials. Start considering circular economy models, where products and materials are reused and recycled within your business. Work with suppliers to ensure packaging materials are recyclable or made from sustainable sources. \n";
    }

    // Water usage
    if (answers["How does your company reduce water usage?"] === "Not at all") {
      advice += "- Water conservation should be an immediate priority, especially if your company operates in a water-scarce area. Begin by installing water-efficient fixtures like low-flow toilets, faucets, and showerheads. Consider a rainwater collection system for outdoor irrigation and cleaning purposes. Encourage employees to be mindful of water use in their daily routines. Explore water-efficient technologies to help reduce overall consumption. \n";
    } else if (answers["How does your company reduce water usage?"] === "Efficient appliances") {
      advice += "- Using efficient appliances is a great first step! You can further reduce water usage by considering automated water-saving systems. For example, motion sensors can control water usage in bathrooms and kitchens, while smart irrigation systems ensure minimal water use outdoors. Explore water recycling options for industries that use large amounts of water in their production processes. \n";
    }

    // Geographical Zone Recommendations
    if (answers["Which geographical zone is your company based in?"] === "North America") {
      advice += "- In North America, renewable energy adoption is accelerating. Start by researching local incentives for solar or wind energy projects. Collaborate with local governments to access funding for sustainability projects, such as energy-efficient building upgrades and waste-to-energy systems. Partner with organizations like the U.S. Green Building Council to enhance your energy efficiency and green building practices. \n";
    } else if (answers["Which geographical zone is your company based in?"] === "Europe") {
      advice += "- Europe is one of the leaders in sustainability efforts. Your company can take advantage of the European Union’s Green Deal initiatives to reduce emissions and increase sustainability efforts. Explore opportunities for funding renewable energy projects, carbon offset programs, and green building certifications. Participate in programs like the EU Emissions Trading System to reduce carbon emissions. \n";
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
