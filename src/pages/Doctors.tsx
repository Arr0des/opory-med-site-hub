
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DoctorsSection from "@/components/home/DoctorsSection";
import AppointmentSection from "@/components/home/AppointmentSection";

const Doctors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Наши специалисты</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Команда высококвалифицированных врачей с многолетним опытом работы и индивидуальным подходом к каждому пациенту.
          </p>
        </div>
      </div>
      <main className="flex-grow">
        <DoctorsSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
