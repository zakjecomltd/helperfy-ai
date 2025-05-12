import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does Helperfy AI work?",
    answer: "Helperfy AI uses advanced natural language processing to understand and respond to customer questions. It learns from your knowledge base, FAQs, or Shopify store data to provide accurate, contextual responses. The more it's used, the smarter it gets."
  },
  {
    question: "How long does it take to set up?",
    answer: "Most customers are up and running within minutes. Simply upload your FAQ documents or connect your Shopify store, and our AI will automatically build its knowledge base. Fine-tuning for your specific needs typically takes less than a day."
  },
  {
    question: "Can I customize the chatbot's appearance?",
    answer: "Yes, you can customize the chatbot's appearance to match your brand colors, add your logo, and position it anywhere on your website. Our visual editor makes it easy to create a seamless customer experience."
  },
  {
    question: "What languages are supported?",
    answer: "Helperfy AI currently supports over 20 languages including English, Spanish, French, German, Chinese, Japanese, and more. We're constantly adding support for additional languages."
  },
  {
    question: "What happens when the AI can't answer a question?",
    answer: "If the AI is unable to confidently answer a question, it will seamlessly transfer the conversation to a human agent if one is available, or collect the customer's contact information so your team can follow up. This ensures customers always get the help they need."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard encryption and security practices to protect your data. We never share your data with third parties, and you retain full ownership of all your content and customer conversations."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Have questions about Helperfy AI? We've got answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a href="#" className="btn-primary">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;