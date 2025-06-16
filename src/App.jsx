import { useState, useEffect } from 'react'
import HowItWorks from './Components/HowItWorks'
import HeroSection from './Components/HeroSection'
import Navigation from './Components/Navigation'
import CarePlanSection from './Components/CarePlanSection'
import Footer from './Components/Footer'
import CTASection from './Components/CTASection'
import ServicesSection from './Components/ServiceSection'
import ContactSection from './Components/ContactSection'


export default function PetCareHub() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation/>
      <HeroSection/>
      <HowItWorks/>
      <CarePlanSection/>
      <ServicesSection/>
      <CTASection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};   