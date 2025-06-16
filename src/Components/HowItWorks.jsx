import React from 'react';
import { Dog, Stethoscope, Calendar, Heart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Pet Assessment",
      description: "We analyze your pet's breed, age, weight, health history, and lifestyle",
      icon: Dog
    },
    {
      step: "2", 
      title: "Algorithm Analysis",
      description: "Our algorithm review breed-specific needs and health risks",
      icon: Stethoscope
    },
    {
      step: "3",
      title: "Custom Plan Creation", 
      description: "We develop a personalized care, nutrition, and wellness plan according to your pet's needs",
      icon: Calendar
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "Regular check-ins and plan adjustments as your pet grows and changes",
      icon: Heart
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Create Your Pet's Perfect Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert team analyzes your pet's unique characteristics to create a comprehensive, personalized care plan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <item.icon className="h-10 w-10 text-blue-600" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 mx-auto mb-4 flex items-center justify-center font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}