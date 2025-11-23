import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AiAdvisor from './components/AiAdvisor';
import FeaturedProduct from './components/FeaturedProduct';
import CarShowcase from './components/CarShowcase';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-toyota-red selection:text-white">
      <Header />
      <main>
        <Hero />
        {/* AI Advisor placed strategically after Hero to capture interest early */}
        <AiAdvisor />
        
        {/* Featured Product Promo Section */}
        <FeaturedProduct />

        <CarShowcase />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;