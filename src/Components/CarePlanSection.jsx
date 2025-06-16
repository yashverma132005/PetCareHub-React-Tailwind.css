import React, { useState } from 'react';
import { X, Stethoscope, Heart, Users, Scissors } from 'lucide-react';
import CarePlanForm from './CarePlanForm';
import CarePlanDisplay from './CarePlanDisplay';

export default function CarePlanSection() {
  const [showPlan, setShowPlan] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [formData, setFormData] = useState({
    petName: '',
    breed: '',
    age: '',
    weight: '',
    activityLevel: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateCarePlan = () => {
    // Generate a care plan based on the form data
    const plan = {
      petInfo: {
        name: formData.petName,
        breed: formData.breed,
        age: formData.age,
        weight: formData.weight,
        activityLevel: formData.activityLevel || 'moderate'
      },
      healthMonitoring: {
        checkupFreq: formData.age < 2 ? 'Every 3-4 months' : formData.age > 7 ? 'Every 6 months' : 'Annually',
        vaccinations: 'Up to date with core vaccines',
        concerns: formData.breed === 'German Shepherd' ? ['Hip dysplasia', 'Bloat'] : 
                 formData.breed === 'Golden Retriever' ? ['Cancer screening', 'Heart health'] :
                 ['General health monitoring', 'Weight management']
      },
      nutrition: {
        dietType: `High-quality ${formData.breed} specific formula`,
        feedingSchedule: formData.age < 1 ? '3-4 times daily' : '2 times daily',
        notes: `Portion control important for ${formData.breed} breed`
      },
      exercise: {
        needs: formData.activityLevel === 'high' ? 'High - 2+ hours daily' : 
               formData.activityLevel === 'low' ? 'Low - 30 minutes daily' : 'Moderate - 1 hour daily',
        activities: formData.breed === 'Labrador Retriever' ? ['Swimming', 'Fetch', 'Long walks'] :
                   formData.breed === 'Chihuahua' ? ['Indoor play', 'Short walks', 'Mental stimulation'] :
                   ['Daily walks', 'Playtime', 'Interactive games']
      },
      grooming: {
        schedule: formData.breed === 'Poodle' ? 'Every 4-6 weeks' : 
                 formData.breed === 'Golden Retriever' ? 'Every 6-8 weeks' : 'Every 8-12 weeks',
        special: `${formData.breed} specific coat care and maintenance`
      }
    };
    
    setGeneratedPlan(plan);
    setShowPlan(true);
  };

  const handlePlanSubmit = (e) => {
    e.preventDefault();
    if (!formData.petName || !formData.breed || !formData.age || !formData.weight) {
      alert('Please fill in all required fields to generate your care plan!');
      return;
    }
    generateCarePlan();
  };

  const resetForm = () => {
    setShowPlan(false);
    setFormData({
      petName: '',
      breed: '',
      age: '',
      weight: '',
      activityLevel: ''
    });
  };

  return (
    <section id="care-plan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Create Your Pet's Personalized Care Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your pet and we'll create a comprehensive care plan tailored specifically for them
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showPlan ? (
            <CarePlanForm 
              formData={formData}
              handleInputChange={handleInputChange}
              handlePlanSubmit={handlePlanSubmit}
            />
          ) : (
            <CarePlanDisplay 
              generatedPlan={generatedPlan}
              setShowPlan={setShowPlan}
              resetForm={resetForm}
            />
          )}
        </div>
      </div>
    </section>
  );
}