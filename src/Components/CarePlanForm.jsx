import React from 'react';

export default function CarePlanForm({ formData, handleInputChange, handlePlanSubmit }) {
  const breedOptions = [
    "Labrador Retriever", "Golden Retriever", "German Shepherd", "Beagle", "Pug",
    "Rottweiler", "Cocker Spaniel", "Dachshund", "Siberian Husky", "Shih Tzu",
    "Boxer", "Doberman Pinscher", "Great Dane", "Saint Bernard", "Pomeranian",
    "Chihuahua", "Yorkshire Terrier", "Indian Pariah Dog", "Bulldog", "Mixed Breed"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Pet Information</h3>
      <form onSubmit={handlePlanSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name *</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            placeholder="e.g., Max"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Breed *</label>
          <select
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select breed</option>
            {breedOptions.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age (years) *</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="3"
              min="0"
              max="25"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Weight (lbs) *</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="65"
              min="1"
              max="200"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
          >
            <option value="">Select activity level</option>
            <option value="low">Low - Mostly indoor/calm</option>
            <option value="moderate">Moderate - Daily walks</option>
            <option value="high">High - Very active/energetic</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Generate My Pet's Care Plan
        </button>
      </form>
    </div>
  );
}