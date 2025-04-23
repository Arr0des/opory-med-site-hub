
import { Shield, Stethoscope, Heart, Calendar, User, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: "Консультации",
    description: "Консультации врачей различных специальностей с индивидуальным подходом к каждому пациенту.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-primary" />,
    title: "Диагностика",
    description: "Современное оборудование для точной и своевременной диагностики заболеваний.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Кардиология",
    description: "Диагностика и лечение сердечно-сосудистых заболеваний с применением современных методик.",
  },
  {
    icon: <User className="w-10 h-10 text-primary" />,
    title: "Неврология",
    description: "Лечение заболеваний нервной системы под руководством опытных специалистов.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Педиатрия",
    description: "Забота о здоровье детей с первых дней жизни под наблюдением опытных педиатров.",
  },
  {
    icon: <Pill className="w-10 h-10 text-primary" />,
    title: "Терапия",
    description: "Комплексное лечение внутренних заболеваний с индивидуальным подходом.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем широкий спектр медицинских услуг для взрослых и детей с использованием современных методик и оборудования.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
              <Button variant="link" className="text-primary p-0 justify-start">
                Подробнее
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Все услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
