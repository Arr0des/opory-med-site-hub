
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/home/ServicesSection";
import AppointmentSection from "@/components/home/AppointmentSection";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <ServicesSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
