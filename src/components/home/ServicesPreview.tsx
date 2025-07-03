import { Shield, Stethoscope, Heart, Calendar, User, Pill, Activity, Eye, Baby, Microscope, Syringe, Scissors, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EditButton from "@/components/admin/EditButton";

const featuredServices = [
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Tesla Former - Эстетика тела",
    description: "Современные методы коррекции фигуры и улучшения состояния кожи.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Кардиология",
    description: "Диагностика и лечение сердечно-сосудистых заболеваний.",
  },
  {
    icon: <Baby className="w-10 h-10 text-primary" />,
    title: "Педиатрия",
    description: "Комплексная медицинская помощь детям от рождения до 18 лет.",
  },
  {
    icon: <User className="w-10 h-10 text-primary" />,
    title: "Гинекология",
    description: "Комплексная диагностика и лечение заболеваний женской репродуктивной системы.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Ультразвуковая диагностика",
    description: "Современная УЗИ-диагностика всех органов и систем.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: "Терапия",
    description: "Общетерапевтическая помощь и лечение внутренних болезней.",
  },
];

const ServicesPreview = () => {
  const handleEdit = () => {
    console.log("Редактирование услуг");
  };

  return (
    <section className="py-20 bg-white relative">
      <EditButton onClick={handleEdit} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем широкий спектр медицинских услуг для взрослых и детей с использованием современных методик и оборудования.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
