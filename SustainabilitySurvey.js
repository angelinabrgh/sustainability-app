import React, { useState } from "react";

export default function SustainabilitySurvey() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [recommendations, setRecommendations] = useState(null);

    const questions = [
        { question: "What is your company's size?", options: ["Small", "Medium", "Large"] },
        { question: "Does your company track energy consumption?", options: ["Yes", "No"] },
        { question: "What is your primary energy source?", options: ["Renewable", "Non-renewable", "Mixed"] },
        { question: "Do you have a waste management strategy?", options: ["Yes", "No"] }
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
        setRecommendations("✅ Thank you for completing the assessment! 🌱 Based on your responses, we recommend focusing on energy efficiency, waste management, and sustainable sourcing.");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Sustainability Assessment</h1>
                {recommendations ? (
                    <div className="text-lg text-gray-700">
                        <p>{recommendations}</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">{questions[step].question}</h2>
                        <div className="mt-4 flex justify-center gap-4">
                            {questions[step].options.map((option) => (
                                <button 
                                    key={option} 
                                    onClick={() => handleAnswer(option)}
                                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition-all"
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
