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
        - **Financial Benefit**: Reduced energy consumption can save you around 10-15% annually on your utility bills, reinvesting this money into further sustainability efforts.
        
      - **Waste Reduction:**
        - **Goal**: Cut waste by 50% within 6 months.
        - **Action**: Start a recycling program for paper, cardboard, and plastic.
        - **Action**: Reduce office printing by 70% by transitioning to digital documents.
        - **Milestone**: Achieve a 25% reduction in paper waste within the first 3 months.
        - **Financial Benefit**: Waste management costs can be reduced by 20-30%, freeing up funds to further enhance business operations.

      - **Employee Engagement:**
        - **Goal**: Increase employee participation in sustainability by 30%.
        - **Action**: Launch a monthly "green challenge" with incentives for sustainable behaviors (e.g., turning off lights, reducing paper use).
        - **Milestone**: Engage at least 50% of employees in the first 6 months.
        - **Profit Opportunity**: Engaged employees are more productive and loyal. This boosts overall company culture and can reduce turnover by up to 15%, saving you recruitment and training costs.
      `;
    } else if (answers["What is your company's size?"] === "Medium") {
      advice += `
      **Recommendations for Medium-Sized Companies:**
      - **Energy Efficiency:**
        - **Goal**: Reduce energy consumption by 20% in 18 months.
        - **Action**: Upgrade to energy-efficient HVAC systems and automate lighting controls in offices.
        - **Milestone**: Install energy-efficient systems in 30% of your office spaces within the first 6 months.
        - **Financial Benefit**: Energy-efficient HVAC systems can reduce your heating and cooling costs by up to 30%, translating to significant savings.

      - **Water Conservation:**
        - **Goal**: Reduce water consumption by 25% over the next year.
        - **Action**: Install water-saving fixtures such as low-flow toilets and faucets.
        - **Action**: Introduce a water monitoring system to track consumption and identify wasteful areas.
        - **Milestone**: Achieve a 10% reduction in water use by the first 6 months.
        - **Financial Benefit**: Reducing water consumption can lead to lower utility bills, saving between 10-15% annually.

      - **Waste Management:**
        - **Goal**: Reach 75% recycling by the end of the year.
        - **Action**: Partner with a local recycling company to handle all recyclable materials.
        - **Action**: Introduce composting in your office kitchens for food waste.
        - **Milestone**: Introduce a composting program within 3 months, aiming for a 30% reduction in landfill waste.
        - **Profit Opportunity**: Companies with strong waste diversion practices can qualify for green certifications, enhancing brand reputation and opening doors to eco-conscious consumers.
      `;
    } else if (answers["What is your company's size?"] === "Large") {
      advice += `
      **Recommendations for Large Companies:**
      - **Energy Sustainability:**
        - **Goal**: Achieve a 50% reduction in carbon emissions by 2025.
        - **Action**: Transition 50% of your energy use to solar or wind power within 3 years.
        - **Milestone**: Begin with 20% renewable energy usage within the first year, and scale up by 10% annually.
        - **Financial Benefit**: Investing in renewable energy can cut energy costs by 30%, and can qualify your business for tax incentives or subsidies.

      - **Carbon Neutrality:**
        - **Goal**: Achieve carbon neutrality by 2030.
        - **Action**: Invest in large-scale renewable energy projects and carbon offset programs.
        - **Action**: Set up a carbon management team to oversee your emissions and ensure continuous improvement.
        - **Milestone**: Offset 10% of your carbon emissions in the first year through tree planting and renewable energy credits.
        - **Profit Opportunity**: Carbon neutrality can lead to access to global markets, as many countries and clients are demanding sustainable practices, opening the door to new revenue streams.

      - **Sustainability Policy:**
        - **Goal**: Integrate sustainability at the core of your operations by 2025.
        - **Action**: Publish a corporate sustainability report every year that highlights your efforts and progress.
        - **Milestone**: Achieve 100% supply chain sustainability transparency by 2024.
        - **Financial Benefit**: Being able to showcase a comprehensive sustainability policy will increase your appeal to environmentally-conscious consumers and investors.
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
      - **Financial Benefit**: Real-time energy monitoring allows you to immediately identify areas of inefficiency, enabling faster savings and more effective cost-cutting strategies.
      `;
    }

    // **Carbon Footprint**
    if (answers["Does your company offset its carbon footprint?"] === "No") {
      advice += `
      **Recommendations for

