import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Добро пожаловать в медицинский центр Точка ОПОРЫ",
    description: "Современное оборудование и профессиональные врачи для вашего здоровья",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    title: "Высококвалифицированные специалисты",
    description: "Наши врачи имеют многолетний опыт работы и постоянно повышают свою квалификацию",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    title: "Комплексный подход к лечению",
    description: "Мы предлагаем полный спектр медицинских услуг для всей семьи",
    bgColor: "from-purple-50 to-pink-50",
  }
];

const SliderSection = () => {
  return (
    <section className="min-h-screen relative">
      <Carousel className="w-full h-screen">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className={`w-full h-screen bg-gradient-to-r ${slide.bgColor} flex items-center justify-center px-4`}>
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to="/about">Узнать больше</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default SliderSection;
