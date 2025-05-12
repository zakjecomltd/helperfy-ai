import React from 'react';
import { Bot, RefreshCw, Clock, Database, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Bot className="h-10 w-10 text-primary-600" />,
    title: 'AI-Powered Support',
    description: 'Our advanced AI understands context and provides human-like responses to your customers\' most common questions.'
  },
  {
    icon: <Database className="h-10 w-10 text-secondary-600" />,
    title: 'Easy Knowledge Base Integration',
    description: 'Upload your FAQ documents or connect your Shopify store and Helperfy automatically builds its knowledge base.'
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-accent-600" />,
    title: 'Continuous Learning',
    description: 'The AI learns from every conversation to improve accuracy and reduce the need for human intervention over time.'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary-600" />,
    title: '24/7 Availability',
    description: 'Provide instant support to your customers around the clock, even when your team is offline.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Features to Enhance Your Support</h2>
          <p className="section-subtitle">
            Helperfy AI comes with everything you need to automate customer support and delight your customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Save up to 60% on support costs
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Most companies see a reduction in support tickets within the first month of using Helperfy AI, with customer satisfaction remaining high.
              </p>
              <a href="#" className="inline-flex items-center bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Learn how
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-4xl font-bold mb-1">80%</h4>
                <p>Automated responses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-4xl font-bold mb-1">60%</h4>
                <p>Cost reduction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-4xl font-bold mb-1">24/7</h4>
                <p>Availability</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-4xl font-bold mb-1">93%</h4>
                <p>Customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;