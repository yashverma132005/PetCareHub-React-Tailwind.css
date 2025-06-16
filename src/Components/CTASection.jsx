const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Give Your Pet the Best Care?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of pet parents who trust PetCareHub for personalized, expert care plans. 
          Get started today and see the difference individualized care makes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#care-plan" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Create Care Plan Now
          </a>
          <a href="#how-it-works" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibent hover:bg-white hover:text-blue-600 transition-all duration-200">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;