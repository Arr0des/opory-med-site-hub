
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/home/ServicesSection";
import AppointmentSection from "@/components/home/AppointmentSection";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Услуги</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Полный спектр медицинских услуг для взрослых и детей с использованием современных методик и оборудования.
          </p>
        </div>
      </div>
      <main className="flex-grow">
        <ServicesSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
