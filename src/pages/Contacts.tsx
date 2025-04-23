
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import AppointmentSection from "@/components/home/AppointmentSection";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Контакты</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Свяжитесь с нами любым удобным для вас способом или запишитесь на прием онлайн.
          </p>
        </div>
      </div>
      <main className="flex-grow">
        <ContactSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
