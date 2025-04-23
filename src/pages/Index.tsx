
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SliderSection from "@/components/home/SliderSection";
import ServicesSection from "@/components/home/ServicesSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import AppointmentSection from "@/components/home/AppointmentSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SliderSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <TestimonialsSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
