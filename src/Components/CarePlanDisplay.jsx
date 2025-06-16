import React from 'react';
import { X, Stethoscope, Heart, Users, Scissors } from 'lucide-react';

export default function CarePlanDisplay({ generatedPlan, setShowPlan, resetForm }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-h-96 overflow-y-auto border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">
          {generatedPlan.petInfo.name}'s Care Plan
        </h3>
        <button
          onClick={() => setShowPlan(false)}
          className="text-gray-500 hover:text-gray-700 p-2"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Pet Summary */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Pet Summary</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><span className="font-medium">Breed:</span> {generatedPlan.petInfo.breed}</div>
            <div><span className="font-medium">Age:</span> {generatedPlan.petInfo.age} years</div>
            <div><span className="font-medium">Weight:</span> {generatedPlan.petInfo.weight} lbs</div>
            <div><span className="font-medium">Activity:</span> {generatedPlan.petInfo.activityLevel}</div>
          </div>
        </div>

        {/* Health Monitoring */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Stethoscope className="h-4 w-4 mr-2 text-red-500" />
            Health Monitoring
          </h4>
          <div className="space-y-2 text-sm">
            <div><span className="font-medium">Checkups:</span> {generatedPlan.healthMonitoring.checkupFreq}</div>
            <div><span className="font-medium">Vaccinations:</span> {generatedPlan.healthMonitoring.vaccinations}</div>
            <div>
              <span className="font-medium">Watch for:</span>
              <ul className="list-disc list-inside ml-4">
                {generatedPlan.healthMonitoring.concerns.map((concern, idx) => (
                  <li key={idx}>{concern}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Nutrition */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Heart className="h-4 w-4 mr-2 text-green-500" />
            Nutrition Plan
          </h4>
          <div className="space-y-2 text-sm">
            <div><span className="font-medium">Diet Type:</span> {generatedPlan.nutrition.dietType}</div>
            <div><span className="font-medium">Feeding:</span> {generatedPlan.nutrition.feedingSchedule}</div>
            <div><span className="font-medium">Notes:</span> {generatedPlan.nutrition.notes}</div>
          </div>
        </div>

        {/* Exercise */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Users className="h-4 w-4 mr-2 text-blue-500" />
            Exercise & Activity
          </h4>
          <div className="space-y-2 text-sm">
            <div><span className="font-medium">Needs:</span> {generatedPlan.exercise.needs}</div>
            <div>
              <span className="font-medium">Recommended Activities:</span>
              <ul className="list-disc list-inside ml-4">
                {generatedPlan.exercise.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Grooming */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Scissors className="h-4 w-4 mr-2 text-purple-500" />
            Grooming Schedule
          </h4>
          <div className="space-y-2 text-sm">
            <div><span className="font-medium">Schedule:</span> {generatedPlan.grooming.schedule}</div>
            <div><span className="font-medium">Special Care:</span> {generatedPlan.grooming.special}</div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button
          onClick={resetForm}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Create Plan for Another Pet
        </button>
      </div>
    </div>
  );
}