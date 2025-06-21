
import { Shield, Stethoscope, Heart, Calendar, User, Pill, Activity, Eye, Baby, Microscope, Syringe, Scissors, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Tesla Former - Эстетика тела",
    description: "Современные методы коррекции фигуры и улучшения состояния кожи.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Аллергология-иммунология",
    description: "Диагностика и лечение аллергических реакций и иммунных нарушений.",
  },
  {
    icon: <Syringe className="w-10 h-10 text-primary" />,
    title: "Вакцинация",
    description: "Профилактическая вакцинация детей и взрослых по календарю прививок.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Гастроэнтерология",
    description: "Диагностика и лечение заболеваний пищеварительной системы.",
  },
  {
    icon: <Microscope className="w-10 h-10 text-primary" />,
    title: "Гематология",
    description: "Лечение заболеваний крови и кроветворных органов.",
  },
  {
    icon: <User className="w-10 h-10 text-primary" />,
    title: "Гинекология",
    description: "Комплексная диагностика и лечение заболеваний женской репродуктивной системы.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Дерматовенерология",
    description: "Диагностика и лечение кожных и венерических заболеваний.",
  },
  {
    icon: <Scissors className="w-10 h-10 text-primary" />,
    title: "Детская хирургия",
    description: "Хирургическое лечение детей с врожденными и приобретенными заболеваниями.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Детская кардиология",
    description: "Диагностика и лечение сердечно-сосудистых заболеваний у детей.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Детская онкология",
    description: "Специализированная помощь детям с онкологическими заболеваниями.",
  },
  {
    icon: <Pill className="w-10 h-10 text-primary" />,
    title: "Детская эндокринология",
    description: "Лечение эндокринных нарушений и заболеваний у детей.",
  },
  {
    icon: <Microscope className="w-10 h-10 text-primary" />,
    title: "Забор анализов",
    description: "Профессиональный забор биоматериала для лабораторных исследований.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Интимное омоложение - Tesla Former Chair",
    description: "Инновационные процедуры интимного омоложения и коррекции.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Кардиология",
    description: "Диагностика и лечение сердечно-сосудистых заболеваний.",
  },
  {
    icon: <User className="w-10 h-10 text-primary" />,
    title: "Косметология",
    description: "Эстетические процедуры для улучшения внешнего вида кожи.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Логопедия",
    description: "Коррекция речевых нарушений у детей и взрослых.",
  },
  {
    icon: <User className="w-10 h-10 text-primary" />,
    title: "Массаж (детский, взрослый)",
    description: "Лечебный и профилактический массаж для всех возрастов.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: "Медицинская помощь на дому",
    description: "Квалифицированная медицинская помощь в домашних условиях.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Неврология",
    description: "Диагностика и лечение заболеваний нервной системы.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Нефрология",
    description: "Лечение заболеваний почек и мочевыводящих путей.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Онкология",
    description: "Диагностика и лечение онкологических заболеваний.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: "Оториноларингология",
    description: "Лечение заболеваний уха, горла и носа.",
  },
  {
    icon: <Eye className="w-10 h-10 text-primary" />,
    title: "Офтальмология",
    description: "Диагностика и лечение заболеваний глаз и зрительной системы.",
  },
  {
    icon: <Baby className="w-10 h-10 text-primary" />,
    title: "Педиатрия",
    description: "Комплексная медицинская помощь детям от рождения до 18 лет.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: "Проктология",
    description: "Диагностика и лечение заболеваний прямой кишки и анального канала.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Пульмонология",
    description: "Лечение заболеваний дыхательной системы и легких.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Ревматология",
    description: "Диагностика и лечение ревматических заболеваний суставов.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Сердечно-сосудистая хирургия",
    description: "Хирургическое лечение заболеваний сердца и сосудов.",
  },
  {
    icon: <User className="w-10 h-10 text-primary" />,
    title: "Современное лечение шейки матки",
    description: "Инновационные методы лечения патологий шейки матки.",
  },
  {
    icon: <Pill className="w-10 h-10 text-primary" />,
    title: "Терапия",
    description: "Общетерапевтическая помощь и лечение внутренних болезней.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Травматология-ортопедия",
    description: "Лечение травм и заболеваний опорно-двигательного аппарата.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Ультразвуковая диагностика",
    description: "Современная УЗИ-диагностика всех органов и систем.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: "Урология",
    description: "Диагностика и лечение заболеваний мочеполовой системы.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Физиотерапевтический кабинет",
    description: "Физиотерапевтические процедуры для реабилитации и лечения.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Флебология",
    description: "Диагностика и лечение заболеваний вен и сосудов.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-primary" />,
    title: "Функциональная диагностика",
    description: "Современные методы функциональной диагностики организма.",
  },
  {
    icon: <Scissors className="w-10 h-10 text-primary" />,
    title: "Хирургия",
    description: "Плановые и экстренные хирургические вмешательства.",
  },
  {
    icon: <Pill className="w-10 h-10 text-primary" />,
    title: "Эндокринология",
    description: "Диагностика и лечение эндокринных заболеваний.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "Эндоскопия",
    description: "Эндоскопическая диагностика и малоинвазивные вмешательства.",
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
      </div>
    </section>
  );
};

export default ServicesSection;
