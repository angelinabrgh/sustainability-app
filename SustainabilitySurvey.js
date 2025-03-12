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
    },
    "What industry is your company in?": {
      Manufacturing: "Your company operates in manufacturing, where improving energy efficiency, sourcing sustainable raw materials, and reducing industrial waste are key strategies.",
      Retail: "In the retail sector, optimizing supply chain sustainability, reducing packaging waste, and promoting recycling programs for customers can enhance your environmental impact.",
      Technology: "For technology companies, reducing electronic waste, optimizing energy-efficient data centers, and promoting remote work can be effective sustainability measures.",
      Other: "Your industry can benefit from tailored sustainability strategies, ensuring responsible sourcing, energy efficiency, and waste reduction."
    },
    "Where is your company located?": {
      "North America": "Operating in North America, leveraging government incentives for renewable energy and engaging with local sustainability initiatives can support your green transition.",
      Europe: "As a European company, aligning with EU sustainability regulations and investing in circular economy initiatives can be beneficial.",
      Asia: "Companies in Asia can optimize supply chain sustainability, reduce water usage, and explore renewable energy investments.",
      Other: "Based on your location, adopting region-specific sustainability measures, such as biodiversity protection and water conservation, can be impactful."
    },
    "Does your company have a sustainability officer or committee?": {
      Yes: "Having a dedicated sustainability officer ensures your company oversees strategy, engages stakeholders, and maintains long-term environmental goals.",
      No: "Without a sustainability officer, forming a committee or appointing a leader can help integrate sustainability into business operations."
    },
    "Does your company design products with recyclability in mind?": {
      Yes: "Your company prioritizes recyclability, leveraging AI-driven designs, modular products, and sustainable materials.",
      No: "Consider switching to biodegradable packaging, extending product lifespans, and adopting modular design approaches."
    },
    "Do you offer a take-back or recycling program for your products?": {
      Yes: "Your company facilitates take-back programs, offering drop-off points and customer incentives to support recycling.",
      No: "Implementing a take-back program and collaborating with recyclers can enhance your circular economy efforts."
    },
    "Are you ready to invest in sustainability?": {
      Yes: "You are actively investing in sustainability by assessing ESG status, upgrading to energy-efficient solutions, and exploring sustainable financing.",
      No: "Starting with small steps such as LED lighting, digital invoices, and basic regulatory alignments can lay the foundation for sustainability."
    },
    "Do you think sustainability is key for business success?": {
      Yes: "Sustainability plays a crucial role in reducing costs, improving brand reputation, and meeting consumer expectations.",
      No: "Recognizing the competitive advantages of sustainability, including compliance benefits and long-term cost savings, is essential."
    },
    "Has your company implemented measures to reduce carbon emissions?": {
      "Electric vehicles": "Your company is reducing fleet emissions through electric vehicles, cutting emissions by nearly 50%.",
      "Carbon credits": "You are strategically using carbon credits to reduce net emissions, achieving a reduction of over 70%.",
      "Remote work": "Your remote work policies are significantly lowering commuting emissions, contributing to a 54% reduction in transportation-related carbon output.",
      "None": "Opportunities exist to adopt carbon reduction measures such as energy efficiency improvements and emissions tracking.",
      "Other": "Your custom carbon reduction initiatives position your company as a sustainability leader."
    },
    "Does your company track its carbon footprint?": {
      Yes: "Tracking your carbon footprint allows for data-driven decisions, improving emission reductions by up to 25%.",
      No: "Without tracking, key carbon reduction opportunities may be overlooked. Implementing monitoring tools can provide actionable insights."
    },
    "What steps has your company taken to reduce water consumption?": {
      "Low-flow fixtures": "By installing low-flow fixtures, your company is reducing water usage by approximately 30%.",
      "Water recycling": "Your water recycling initiatives allow up to 80% of water to be reused, improving resource efficiency.",
      "Employee awareness": "Employee training and awareness programs are fostering a culture of conservation, reducing water waste by 20%.",
      "None": "Your company has the opportunity to implement water-saving initiatives such as efficient fixtures or conservation programs.",
      "Other": "Your tailored water conservation strategies align with best industry practices."
    },
    "Does your company monitor water usage?": {
      Yes: "Regular water usage monitoring allows for better operational efficiency, improving water conservation by 20%.",
      No: "Without monitoring, water conservation efforts may be hindered. Implementing tracking systems can enhance resource management."
    }
  };

  const finalReport = `Your finished short report:
    ${Object.keys(answers).map(question => responses[question]?.[answers[question]] || "").join(" ")}
    
    If you are interested in a longer, more detailed report and our consulting service, please contact us.`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      {!showReport ? (
        <button onClick={() => setShowReport(true)}>Finish Survey</button>
      ) : (
        <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-xl w-full text-left">
          <h3 className="text-green-700 font-bold text-2xl mb-4">Your Finished Short Report</h3>
          <p className="text-gray-700">{finalReport}</p>
        </div>
      )}
    </div>
  );
}
