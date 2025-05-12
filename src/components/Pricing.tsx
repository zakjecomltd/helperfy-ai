import React from 'react';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "For small businesses just getting started with AI support.",
    features: [
      "AI chatbot for your website",
      "Up to 100 conversations/month",
      "Basic knowledge base integration",
      "Email support",
      "1 team member"
    ],
    notIncluded: [
      "Shopify integration",
      "Custom training",
      "Analytics dashboard",
      "Priority support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing businesses with moderate support volume.",
    features: [
      "AI chatbot for your website",
      "Up to 1,000 conversations/month",
      "Advanced knowledge base integration",
      "Shopify integration",
      "Basic analytics dashboard",
      "Email & chat support",
      "3 team members"
    ],
    notIncluded: [
      "Custom training",
      "Priority support"
    ],
    cta: "Try Free for 7 Days",
    popular: true
  },
  {
    name: "Agency",
    price: "$199",
    period: "/month",
    description: "For businesses with high support volume and complex needs.",
    features: [
      "AI chatbot for your website",
      "Unlimited conversations",
      "Advanced knowledge base integration",
      "Shopify & custom integrations",
      "Advanced analytics dashboard",
      "Custom AI training",
      "Priority support",
      "Unlimited team members"
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that's right for your business. All plans include a 7-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'shadow-lg border-2 border-primary-500 relative scale-105 z-10' 
                  : 'shadow-sm hover:shadow-md border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary-500 text-white text-center py-1 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <a 
                  href="#" 
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors mb-8 ${
                    plan.popular 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </a>
                
                <div>
                  <p className="font-medium mb-3">Included features:</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium mb-3 text-gray-500">Not included:</p>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Need a custom plan?</h3>
          <p className="text-gray-600 mb-6">
            Contact our sales team for a customized solution that fits your specific business needs.
          </p>
          <a href="#" className="btn-secondary inline-block">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;