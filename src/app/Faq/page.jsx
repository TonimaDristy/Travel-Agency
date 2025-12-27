// app/faq/page.tsx
import React from 'react';
// Assume you have an Accordion component in your components folder

const faqs = [
    { question: "How do I book a tour?", answer: "Booking can be done online through our website or by contacting our booking team directly." },
    { question: "What payment methods are accepted?", answer: "We accept all major credit cards and bank transfers." },
    // Add more FAQs here
];

const FAQPage = () => {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    // Use your custom Accordion component here (example structure below)
                    <div key={index} className="border p-4 rounded-lg shadow-sm">
                        <h2 className="font-semibold cursor-pointer">**{faq.question}**</h2>
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
