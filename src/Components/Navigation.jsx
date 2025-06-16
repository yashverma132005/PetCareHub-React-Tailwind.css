import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-800">PetCareHub</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="#care-plan" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Care Plan
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <button href="#care-plan" className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg mt-2">
              Get Care Plan
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}