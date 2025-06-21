
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DoctorsSection from "@/components/home/DoctorsSection";
import AppointmentSection from "@/components/home/AppointmentSection";

const Doctors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <DoctorsSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
