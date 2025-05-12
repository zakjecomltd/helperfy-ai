import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Helperfy AI has revolutionized our customer support. We've reduced response times from hours to seconds, and our team can focus on complex issues while the AI handles the rest.",
    author: "Sarah Johnson",
    position: "Customer Support Manager",
    company: "TechGear",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    content: "The setup was incredibly easy. We connected our Shopify store and within 24 hours, Helperfy was answering questions about our products, shipping, and returns with impressive accuracy.",
    author: "David Chen",
    position: "E-commerce Director",
    company: "Urban Style",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    content: "Our customers love getting instant answers at any time of day. Since implementing Helperfy AI, we've seen a 40% increase in customer satisfaction and a significant drop in support tickets.",
    author: "Emily Rodriguez",
    position: "CEO",
    company: "Wellness Collective",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Trusted by Leading Businesses</h2>
          <p className="section-subtitle">
            See what our customers have to say about their experience with Helperfy AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          <img src="https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          <img src="https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          <img src="https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          <img src="https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          <img src="https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;