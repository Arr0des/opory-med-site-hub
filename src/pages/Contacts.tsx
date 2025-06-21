
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import AppointmentSection from "@/components/home/AppointmentSection";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <ContactSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
