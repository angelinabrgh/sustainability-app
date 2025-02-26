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

    const submitAnswers = async () => {
        const response = await fetch("/api/get-recommendations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answers })
        });
        const data = await response.json();
        setRecommendations(data.recommendations);
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-center mb-4">Sustainability Assessment</h1>
            {recommendations ? (
                <div>
                    <h2 className="text-xl font-bold">Sustainability Recommendations</h2>
                    <p className="mt-2">{recommendations}</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-lg font-semibold">{questions[step].question}</h2>
                    <div className="mt-4 flex flex-col gap-2">
                        {questions[step].options.map((option) => (
                            <button key={option} onClick={() => handleAnswer(option)} className="bg-blue-500 text-white px-4 py-2 rounded">
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
