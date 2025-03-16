import React, { useState } from "react";



export default function SustainabilitySurvey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showReport, setShowReport] = useState(false);

  const questions = [
    { question: "Size of the Company", options: ["Small", "Medium", "Large"] },
    { question: "Industry", options: ["Manufacturing", "Retail", "Technology", "Hospitality", "Transportation", "Health", "Other"] },
    { question: "Geographical Zone", options: ["North America", "Europe", "Asia", "Africa", "South America", "Oceania"] },
    { question: "Energy Consumption & Efficiency", options: ["Does not monitor", "Uses renewable energy", "Uses non-renewable energy", "Uses a mix"] },
    { question: "Waste Management", options: ["No waste reduction strategy", "Disposes in landfills", "Recycles", "Composts"] },
    { question: "Supplier Sustainability", options: ["Yes", "No"] },
    { question: "Prioritizing Local Suppliers", options: ["Yes", "No"] },
    { question: "Carbon Footprint Tracking", options: ["Yes", "No"] },
    { question: "Measures to Reduce Carbon Emissions", options: ["Electric vehicles", "Carbon credits", "Remote work policies", "None", "Other"] },
    { question: "Monitoring Water Usage", options: ["Yes", "No"] },
    { question: "Steps to Reduce Water Consumption", options: ["Low-flow fixtures", "Water recycling systems", "Employee awareness programs", "None", "Other"] },
    { question: "Sustainability Training for Employees", options: ["Yes", "No"] },
    { question: "Sustainability Officer or Committee", options: ["Yes", "No"] },
    { question: "Product Lifecycle & Circular Economy", options: ["Yes", "No"] },
    { question: "Take-back or Recycling Program", options: ["Yes", "No"] },
    { question: "Investment in Sustainability", options: ["Yes", "No"] },
    { question: "Sustainability as a Key Business Aspect", options: ["Yes", "No"] }
  ];

  const responses = {
     "Size of the Company": {
      "Small": "Thank you very much for answering the form. Here are our consultations for your company to improve its sustainability. Focus on low-cost sustainability initiatives such as energy efficiency, remote work policies, and minimizing paper use.",
      "Medium": "Thank you very much for answering the form. Here are our consultations for your company to improve its sustainability. Implement sustainability policies, conduct energy audits, and engage employees in green initiatives.",
      "Large": "Thank you very much for answering the form. Here are our consultations for your company to improve its sustainability. Develop a company-wide sustainability strategy, set measurable goals, and invest in renewable energy."
    },
    "Industry": {
      "Manufacturing": "As your company is in the manufacturing industry, improve energy efficiency, source sustainable materials, and reduce industrial waste.",
      "Retail": "As your company is in the retail industry, optimize supply chain sustainability, reduce packaging waste, and promote recycling programs.",
      "Technology": "As your company is in the technology industry, reduce electronic waste, optimize data center efficiency, and promote remote work.",
      "Hospitality": "As your company is in the hospitality industry, reduce water and energy consumption, implement waste reduction strategies, and use eco-friendly amenities.",
      "Transportation": "As your company is in the transportation industry, transition to electric vehicles, optimize logistics, and offset carbon emissions.",
      "Health": "As your company is in the health industry, minimize medical waste, use energy-efficient equipment, and adopt sustainable procurement practices.",
      "Other": "Try to adapt sustainability strategies based on industry best practices."
    },
    "Geographical Zone": {
      "North America": "Leverage government incentives for renewable energy and engage with local sustainability initiatives.",
      "Europe": "Try to align with EU sustainability regulations and invest in circular economy initiatives.",
      "Asia": "Try to optimize supply chain sustainability, reduce water usage, and explore renewable energy investments.",
      "Africa": "Try to focus on water conservation, renewable energy (solar), and sustainable sourcing practices.",
      "South America": "Try to implement deforestation prevention strategies, support biodiversity conservation, and improve sustainable agriculture sourcing.",
      "Oceania": "Try to address climate change resilience, invest in renewable energy, and protect biodiversity in supply chains."
    },
    "Energy Consumption & Efficiency": {
      "Does not monitor": "It is very important for your company to implement an energy tracking system to identify inefficiencies and reduce consumption.",
      "Uses renewable energy": "It is very important for your company to continue investment in renewable sources and explore energy storage solutions.",
      "Uses non-renewable energy": "It is very important for your company to transition to cleaner energy alternatives, improve energy efficiency, and explore carbon offset programs.",
      "Uses a mix": "It is very important for your company to increase the percentage of renewable energy used and implement energy efficiency measures."
    },
    "Waste Management": {
      "No waste reduction strategy": "Waste Management is a main sustainability practice. Develop a formal plan including waste audits, reduction targets, and employee training.",
      "Disposes in landfills": "Waste Management is a main sustainability practice. Reduce landfill waste through improved sorting, recycling initiatives, and supplier engagement.",
      "Recycles": "Waste Management is a main sustainability practice. Expand recycling programs, encourage employees to participate, and work with vendors to improve recyclability of materials.",
      "Composts": "Waste Management is a main sustainability practice. Increase composting awareness within the company, partner with local composting services, and ensure proper waste sorting."
    },
    "Supplier Sustainability": {
      "Yes": " Expanding sustainability criteria in procurement ensures ongoing environmental responsibility. Encouraging suppliers to adopt greener practices fosters long-term positive impact. Regular reviews and third-party certifications strengthen sustainable sourcing.",
      "No": " Requesting sustainability policies from suppliers is an easy first step. Prioritizing local, eco-conscious vendors reduces emissions and supports greener practices. Integrating sustainability criteria into procurement enhances responsible sourcing."
    },
    "Prioritizing Local Suppliers": {
      "Yes": "Prioritizing local suppliers reduces transportation emissions and strengthens regional economies. Sourcing locally ensures fresher materials, supports ethical labor practices, and lowers logistics costs. Strengthening partnerships with sustainable local businesses enhances supply chain resilience.",
      "No": "Shifting to local suppliers can significantly cut emissions and support community businesses. Evaluating transportation impact and working with vendors closer to operations improves sustainability. Gradually transitioning to local sourcing strengthens both environmental and economic sustainability."
    },
    "Carbon Footprint Tracking": {
      "Yes": "Systematic carbon tracking empowers data-driven decisions, often yielding a 20–25% improvement in targeted emission reductions.",
      "No": "Without carbon footprint tracking, your company may forgo up to a 25% efficiency gain."
    },
    "Measures to Reduce Carbon Emissions": {
      "Electric vehicles": "Transitioning to electric vehicles can cut fleet emissions by nearly 50%.",
      "Carbon credits": "Strategic use of carbon credits can achieve net emission reductions of over 70%.",
      "Remote work policies": "Implementing remote work policies has been shown to reduce commuting emissions by up to 54%.",
      "None": "Not adopting carbon reduction measures may leave significant emission-cutting opportunities untapped.",
      "Other": "Your custom carbon reduction approach reflects innovative leadership in sustainable practices."
    },
    "Monitoring Water Usage": {
      "Yes": "Consistent monitoring of water usage can drive operational improvements and yield efficiency gains of around 20%.",
      "No": "Omitting systematic water monitoring may obscure potential efficiency gains of roughly 20%."
    },
    "Steps to Reduce Water Consumption": {
      "Low-flow fixtures": "Installing low-flow fixtures can trim water usage by almost 30%.",
      "Water recycling systems": "Adopting water recycling systems can enable up to 80% water reuse.",
      "Employee awareness programs": "Engaging employees in water conservation can drive savings over 20%.",
      "None": "Neglecting water conservation strategies might mean missing opportunities for up to 25% water savings.",
      "Other": "Your unique water-saving initiative reflects a bespoke strategy."
    },
    "Sustainability Training for Employees": {
      "Yes": "Training for employees is a great possibility for your company to achieve good. Your robust training program boosts efficiency and engagement, supporting sustainable transformation.",
      "No": "Training for employees can be great possibility for your company to achieve good. Without structured training, you risk missing efficiency gains and strategic insights for sustainability."
    },
    "Sustainability Officer or Committee": {
      "Yes": "Oversee sustainability strategy and ensure compliance with ESG regulations.",
      "No": "Form a committee or appoint a dedicated officer to improve sustainability structure."
    },
    "Product Lifecycle & Circular Economy": {
      "Yes": "Implement AI-driven design for recyclable products, extend product lifespans, and adopt modular designs.",
      "No": "Switch to biodegradable packaging, extend product lifespans, and offer refurbishment services."
    },
    "Take-back or Recycling Program": {
      "Yes": " For your recycling program, try to increase drop-off points, provide mail-back services, and integrate recycled materials into the supply chain.",
      "No": " For your recycling program, try to establish a take-back program and partner with specialized recyclers."
    },
    "Investment in Sustainability": {
      "Yes": "To invest further in sustainability, pay attention to assessing your carbon footprint, implement renewable energy solutions, and train employees in sustainability.",
      "No": "To start investing in sustainability, start with cost-saving measures like LED lighting, digital invoices, and waste reduction programs."
    },
    "Sustainability as a Key Business Aspect": {
      "Yes": "Sustainability should remain a main aspect of your strategy. Integrating sustainability reduces costs, improves brand reputation, and aligns with regulations.",
      "No": "Sustainability should become a main aspect of your strategy and can be achieved in small steps. Small changes like energy-saving practices and digital invoices can enhance operations without major investment."
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
    return (
      "Your Sustainability Report: " +
      Object.keys(answers)
        .map((question) => responses[question]?.[answers[question]] || "")
        .join(" ") +
      " The Sustainify team hopes this brief report inspires you to take action toward becoming a more sustainable company. If you're interested in a detailed report and professional consultation, feel free to contact us at sustainify@gmail.com."
    );
  };

  return (
   <div
  className="min-h-screen flex flex-col items-center justify-center px-12 py-24 text-center"
  style={{
  backgroundImage: "url('/Sustainify.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0
}}
>
      {!showReport ? (
        <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-xl w-full text-center">
         <h1 className="text-4xl font-extrabold text-white mb-6">🌍 Sustainability Survey</h1>
         <h2 className="text-xl font-semibold text-white mb-6">{questions[step].question}</h2>
          <div className="flex flex-col space-y-4">
            {questions[step].options.map((option, index) => (
             <button
  key={index}
  onClick={() => handleAnswer(option)}
  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg border border-white shadow-lg"
>
  {option}
</button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-xl w-full text-left">
          <p className="text-white">{generateReport()}</p>
        </div>
      )}
    </div>
  );
}
