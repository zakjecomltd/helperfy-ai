import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              AI Chatbot That Handles <span className="text-primary-600">80%</span> of Your Customer Support
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Upload your FAQ or connect Shopify. Let AI answer your customers 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary text-lg">
                Try Free for 7 Days
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#" className="btn-secondary text-lg">
                Watch Demo
              </a>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="User" className="h-10 w-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="User" className="h-10 w-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg" alt="User" className="h-10 w-10 rounded-full border-2 border-white" />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">500+</span> businesses already using Helperfy AI
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white p-6 rounded-3xl shadow-xl">
              {/* iPhone-style chat interface */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm font-medium text-gray-500">Helperfy AI Chat</p>
              </div>
              
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-xs">
                    <p>When will my order be delivered?</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                    <p>Based on your order #12345, your package is scheduled for delivery tomorrow between 9 AM and 12 PM. You can track it in real-time using this link: <a href="#" className="text-primary-600">track.order/12345</a></p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-xs">
                    <p>What if I'm not home?</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                    <p>You can leave delivery instructions in your order details. The courier can leave it with a neighbor or at a safe place you specify. You can update these preferences up until midnight today.</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="mt-6">
                <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 overflow-hidden">
                  <input 
                    type="text" 
                    placeholder="Ask anything..." 
                    className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-sm"
                  />
                  <button className="p-2 mr-1 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;