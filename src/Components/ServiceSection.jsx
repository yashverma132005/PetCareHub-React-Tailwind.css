import { Stethoscope, Scissors, Home, Users, CheckCircle, Heart } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Health Monitoring",
      description: "Complete health assessments with breed-specific health screening and age-appropriate treatments.",
      features: ["Breed Health Screening", "Age-Based Vaccinations", "Checkups needed", "Preventive Care"]
    },
    {
      icon: Scissors,
      title: "Grooming Schedule",
      description: "Customized grooming based on coat type, breed requirements, and individual needs.",
      features: ["Breed-Specific Cuts", "Coat Care", "Nail & Dental Care", "Special care"]
    },
    {
      icon: Heart,
      title: "Nutrition Plan",
      description: "Personalized feeding plans considering age, weight, breed, and activity level.",
      features: ["Diet Planning", "Weight Control", "Supplement Advice", "Feeding Schedules"]
    },
    {
      icon: Users,
      title: "Exercise & Activity",
      description: "Training programs tailored to breed temperament, age, and individual behavioral needs.",
      features: ["Breed Behavior Training", "Age-Appropriate Methods", "Activity recommended", "Activity Neds"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every Plan is customized based on your pet's breed, age, weight, and individual characteristics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;